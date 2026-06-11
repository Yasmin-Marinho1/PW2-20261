import { useState } from 'react'
import { getCepData } from './services/api'

function App() {
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [cepError, setCepError] = useState('');

  function limparCampos() {
    setRua('');
    setNumero('');
    setBairro('');
    setEstado('');
    setCidade('');
  }

  async function handleCep() {
    try {
      if (!/^\d{5}-\d{3}$/.test(cep) && !/^\d{8}$/.test(cep)) {
        throw new Error('O CEP informado é invalido.');
      }
      const cepLimpo = cep.replace('-', '');
      const data = await getCepData(cepLimpo);
      if (data.erro) {
        throw new Error('Erro ao buscar o CEP.');
      }
      setRua(data.logradouro || '');
      setBairro(data.bairro || '');
      setEstado(data.uf || '');
      setCidade(data.localidade || '');
      setTimeout(() => {
        document.getElementById('numero')?.focus();
      }, 50);
    } catch (e) {
      setCepError(e.message);
      limparCampos();
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-blue-900 p-4'>
      <div className='w-full max-w-2xl bg-white p-8'>
        <h2 className='mb-6 text-center text-2xl font-semibold text-gray-800'>Address</h2>
        <form className='space-y-4'>
          <div>
            <input type='text' value={cep} onChange={(e) => setCep(e.target.value)} onFocus={() => setCepError('')} onBlur={handleCep} placeholder='CEP' name='cep' maxLength={9} autoFocus className={`w-full border px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none
            ${cepError 
              ? 'border-red-500 bg-red-100 focus:border-red-600' 
              : 'border-gray-400 bg-transparent focus:border-gray-600'
            }`}/>
            {cepError && (
              <div className="mt-4 text-base font-medium text-red-600 animate-fade-in">
                {cepError}
              </div>
            )}
          </div>
          <div>
            <input type='text' value={rua} onChange={(e) => setRua(e.target.value)} placeholder='Rua' name='rua' className='w-full border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:border-gray-600'/>
          </div>
          <div>
            <input type='text' value={numero} onChange={(e) => setNumero(e.target.value)} id='numero' name='numero' placeholder='Número' className='w-full border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:border-gray-600'/>
          </div>
          <div>
            <input type='text' value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder='Bairro' name='bairro' className='w-full border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:border-gray-600'/>
          </div>
          <div>
            <input type='text' value={estado} onChange={(e) => setEstado(e.target.value)} placeholder='Estado' name='estado' className='w-full border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:border-gray-600'/>
          </div>
          <div>
            <input type='text' value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder='Cidade' name='cidade' className='w-full border border-gray-400 bg-transparent px-3 py-2 text-sm text-gray-800 placeholder-gray-500 outline-none focus:border-gray-600'/>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
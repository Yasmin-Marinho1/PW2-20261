export async function getCepData(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
        throw new Error('Erro na conexão com o servidor de CEP.');
    } return response.json();
}

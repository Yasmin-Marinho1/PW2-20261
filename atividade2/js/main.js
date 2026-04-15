import { flags } from './flags.js';

const main = document.querySelector('main');

function countryFlags(flag) {
    if (flag.id === "an") {
        return `<div class="flag col-2 my-2 text-center">
            <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg/250px-Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg.png" alt="${flag.name}">
            <p>${flag.name}</p>
        </div>`;
    } return `<div class="flag col-2 my-2 text-center">
            <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${flag.id}.svg" alt="${flag.name}">
            <p>${flag.name}</p>
        </div>`;
}

for (const flag of flags) {
    main.insertAdjacentHTML('beforeend', countryFlags(flag))
}
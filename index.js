import countries from "./countries.js";


const inputField = document.querySelector('.search');
const countryContainer = document.querySelector('.country-list');
createMarkUp(countries);
inputField.addEventListener('input', _.debounce(inputHandler, 300))



function createMarkUp(countries) {
    const markUp = countries.map(country => `<li>${country}</li>`).join('');
    countryContainer.innerHTML = markUp
}

function inputHandler(event) {
    const eventValue = event.target.value.toLowerCase();
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(eventValue));
    createMarkUp(filteredCountries);
    console.log(`counter`)
}
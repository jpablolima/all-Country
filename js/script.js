let tabCountries = null;
let tabFavorites = null;

let allContries = [];
let favoriteCoutries = [];

let contCoutries = 0;
let countCoutries = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {

  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');

  totalPopulationFavorites =
    document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();

});

async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  const json = await res.json();
  allContries = json.map(country => {
    const {
      numericCode,
      translations,
      population,
      flag
    } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag
    }
  });
  //console.log(allContries);
  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleContryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';
  allContries.forEach(country => {
    const {
      name,
      flag,
      id,
      population
    } = country;

    const counytyHTML = `
    <div class = 'country'>
    <div>
      <a  id="${id}" class = "waves-effect waves-light btn">+</a>
    </div>
    <div>
      <img src="${flag}" alt="${name}">
    </div>
    <div>
      <ul>
        <li>${name}</li>  
        <li>${population}</li>  
      </ul>
    </div>
    </div>     
    `;
    countriesHTML += counytyHTML;
  });
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {

};

function renderSummary() {};

function handleContryButtons() {};
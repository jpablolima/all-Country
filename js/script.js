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

function fetchCountries() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(json => {
      allContries = json;
      console.log(allContries);
    });

  console.log(allContries);
}
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

  //favoriteCountries = allContries;
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

    const countryHTML = `
    <div class = 'country'>
    <div>
      <a  id="${id}" class = "waves-effect waves-light btn red darken-4">+</a>
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
    countriesHTML += countryHTML;
  });
  countCoutries += '</div>'
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {

  let favoritesHTML = '<div>';

  favoriteCoutries.forEach(country => {
    const {
      name,
      flag,
      id,
      population
    } = country;

    const favoriteCountryHTML = `
    <div class = 'country'>
    <div>
      <a  id="${id}" class = "waves-effect waves-light btn">-</a>
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
    favoritesHTML += favoriteCountryHTML;

  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;


};

function renderSummary() {
  countCountries.textContent = allContries.length;
  countFavorites.textContent = favoriteCoutries.length;

  const totalPopulation = allContries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  // const totalFavorites = fovoriteContries.reduce((accumulator, current) => {
  // return accumulator + current.population;
  //}, 0);

  totalPopulationList.textContent = totalPopulation;
  //totalPopulationFavorites.textContent = totalFavorites;
};

function handleContryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  //console.log(coutryButtons);
  //console.log(favoriteButtons);

  countryButtons.forEach(button => {
    button.addEventListener('click', () => addToFavorites(button.id));

  });
  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  })
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find(button => button.id === id);
  console.log(countryToAdd);
}

function removeFromFavorites(id) {

}
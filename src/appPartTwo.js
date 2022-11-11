import axios from "axios";

const countryBlock = document.getElementById('country-block');
const searchField = document.getElementById('searchBar');
const errorMessage = document.getElementById('error-message');
const searchButton = document.getElementById('searchButton');

const checkCurrency = currencies => {
    const currenciesArray = currencies.map(currency => currency.name)
    return currenciesArray.join("'s and ");

}

const placeSingleCountry = singlecountry => {

    const singleCountryFlag = document.getElementById('country-flag');
    const singleCountryName = document.getElementById('country-name');
    const countryInfo = document.getElementById('country-info');

    const {flags, name, subregion, population, capital, currencies} = singlecountry;

    // singleCountryFlags maken

    singleCountryFlag.setAttribute('src', flags.png);

    // singelCountryName maken
    singleCountryName.textContent = name;


    //countryInfo maken
    countryInfo.textContent = `${name} is situated in ${subregion}.it has a population of ${population} people, The capital is ${capital} and you can pay with ${checkCurrency(currencies)}'s`;

    countryBlock.style.display="block"


}


// Async Functions voor part 2
async function fetchSpecificData() {
    const URISpecific = 'https://restcountries.com/v2/name/'
    let inputSearch = searchField.value

    errorMessage.style.display = "none"
    countryBlock.style.display = "none"
    searchField.value= ''
    try {
        const specificData = await axios.get(URISpecific + inputSearch)
        console.log(specificData);
        placeSingleCountry(specificData.data[0])

    } catch (e) {
        errorMessage.style.display= "block"
        console.error(e);
    }

}

// button aanroepen


// addeventlistener aanmaken
searchButton.addEventListener('click' ,fetchSpecificData)
searchField.addEventListener('keypress',(e)=>{
    if (e.key=== 'Enter'){
        fetchSpecificData()
    }
})

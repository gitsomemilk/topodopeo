import axios from "axios";

const placeSingleCountry = singlecountry => {
    const singleCountry =document.getElementById('partTwoArticle');
    const singleCountryFlag = document.createElement('img');
    const singleCountryName = document.createElement('li');
    const singleCountrySubArea = document.createElement('li');
    const singleCountryPopulation = document.createElement('li');
    const singleCountryCapitol = document.createElement('li');
    const singleCountryCurrency = document.createElement('li');

    // countryFlags maken

    singleCountryFlag.setAttribute('src', flags.png);
    singleCountryFlag.classList.add("countryFlag");
    singleCountryFlag.appendChild(singleCountryFlag);
}


// Async Functions voor part 2
async function fetchSpecificData(){
    const URISpecific ='https://restcountries.com/v2/name/'
    let inputSearch = "netherlands"
    try {
        const specificData= await axios.get(URISpecific + inputSearch )
        console.log(specificData);
    }catch(e){
        console.error(e);
    }

}

fetchSpecificData()
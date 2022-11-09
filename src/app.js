console.log('Hallo daar!');
import axios from 'axios';

const getRegionColor = region => {

    switch (region) {
        case "Africa":
            return "blue";
        case "Americas" :
            return "green";
        case "Asia" :
            return "red";
        case "Europe" :
            return "yellow";
        case "Oceania" :
            return "purple";
        default:
            return "black"
    }

}

//function placeCountry gemaakt dit is handiger !!! onthoud
const placeCountry = country => {
    const countryList = document.getElementById('list-landen');
    const countryName = document.createElement('li');
    const countryPopulation = document.createElement('li');
    const countryRegio = document.createElement('li');
    const countryFlag = document.createElement('img');
    const {name,population,region,flags} = country;

    // countryFlags maken
    countryFlag.setAttribute('src', flags.png);
    countryFlag.classList.add("countryFlag");
    countryList.appendChild(countryFlag);


    // countryNames maken
    countryName.textContent = name;
    countryList.appendChild(countryName);

    // countryPopulations maken
    countryPopulation.textContent = `Has a population of ${population} people`;
    countryList.appendChild(countryPopulation);

    // countryRegio maken

    countryRegio.textContent= region;
    countryRegio.classList.add(getRegionColor(region))
    countryList.appendChild(countryRegio);
}


async function fetchData() {
    const URI = 'https://restcountries.com/v2/all/'


    try {
        const {data} = await axios.get(URI);
        const sortedCountry = data.sort((a,b)=> a.population - b.population);
        sortedCountry.map(country=> placeCountry(country))
        console.log(data);
        console.log(data[0].name);


    } catch (error) {
        console.error(error);
    }

}




fetchData();





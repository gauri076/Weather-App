const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");

const cityNames = document.getElementById("city-names");
const cityNames1 = document.getElementById("city-names1");
const cityNames2 = document.getElementById("city-names2");
const cityTime = document.getElementById("city-time");
const tempCelcius = document.getElementById("celcius");
const tempFeranite = document.getElementById("feranite");

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=6e9d1d7c2d9e43b08e371309252711 &q=${cityName}&aqi=yes`
    );

    return await promise.json()
}


button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityNames.innerText =`Name: ${result.location.name}`;
    cityNames1.innerText =`Region: ${result.location.region}`;
    cityNames2.innerText =` Country: ${result.location.country}`;
    cityTime.innerText =`Time: ${result.location.localtime}`;
    tempCelcius.innerText = `temprature in Celcius: ${result.current.temp_c}`;
    tempFeranite.innerText = `temprature in Feranite: ${result.current.temp_f}`
    
});
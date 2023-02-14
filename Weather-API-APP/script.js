let data;

const inputBox = document.getElementById("inputBox");
const cityName = document.getElementById("cityName");
const stateName = document.getElementById("stateName");
const countryName = document.getElementById("country");
const logoImage = document.getElementById("logoImage");
const temperature = document.getElementById("temperature");
const weatherStatus = document.getElementById("weatherStatus");
const feelsLike = document.getElementById("feelsLike");
const windSpeed = document.getElementById("windSpeed");
const visibility = document.getElementById("visibility");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const rain = document.getElementById("rain");
const uv = document.getElementById("uv-index");

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please Enter The City Name: ");
        return;
    }
    let city = inputBox.value;
// fetch details
const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=433744f56e7740f6960144750231402&q=${city}`
);

const orgData = await fetchData.json();
data = orgData;
console.log(data);

// Displaying the data in HTML
cityName.innerText = data.location.name;
stateName.innerText = data.location.region;
countryName.innerText = data.location.country;
logoImage.src = data.current.condition.icon;
temperature.innerText = data.current.temp_c;
weatherStatus.innerText = data.current.condition.text;
feelsLike.innerText = data.current.feelslike_c;
windSpeed.innerText = data.current.wind_kph;
visibility.innerText = data.current.vis_km;
pressure.innerText = data.current.pressure_mb;
humidity.innerText = data.current.humidity;
rain.innerText = data.current.cloud;
uv.innerText = data.current.uv;

}
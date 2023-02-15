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

// clear
    if(weatherStatus.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/5933718/pexels-photo-5933718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        return;
    }
    // haze
    else if(weatherStatus.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6494442/pexels-photo-6494442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        return;
    }
    // light rain
    else if(weatherStatus.textContent == 'Light rain') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6785587/pexels-photo-6785587.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // light rain shower
    else if(weatherStatus.textContent == 'Light rain shower') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/10507682/pexels-photo-10507682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        return;
    }
    // moderate rain 
    else if(weatherStatus.textContent == 'Moderate rain') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/919588/pexels-photo-919588.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // Patchy rain 
    else if(weatherStatus.textContent == 'Patchy rain possible') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2130161/pexels-photo-2130161.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // light freezing rain 
    else if(weatherStatus.textContent == 'light freezing rain') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2130161/pexels-photo-2130161.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // light sleet
    else if(weatherStatus.textContent == 'Light sleet') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6838226/pexels-photo-6838226.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // sleet 
    else if(weatherStatus.textContent == 'Sleet') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6838226/pexels-photo-6838226.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // mist
    else if(weatherStatus.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2334533/pexels-photo-2334533.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // overcast
    else if(weatherStatus.textContent == 'Overcast') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // partly cloud
    else if(weatherStatus.textContent == 'Partly cloudy') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/5795688/pexels-photo-5795688.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // snow 
    else if(weatherStatus.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    //light snow 
    else if(weatherStatus.textContent == 'Light snow') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1900203/pexels-photo-1900203.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    //moderate snow 
    else if(weatherStatus.textContent == 'Moderate snow') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2007139/pexels-photo-2007139.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // moderate or heavy snow showers
    else if(weatherStatus.textContent == 'Moderate or heavy snow showers') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/4969844/pexels-photo-4969844.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    // sunny
    else if(weatherStatus.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=600')";
        return;
    }
    else {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/6017648/pexels-photo-6017648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        return;

    }
}
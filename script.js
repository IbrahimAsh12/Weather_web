let apiKey = "f7acc0e1c0dac1ced006bb0f48592e67";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const mainBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".section1 img");

async function checkWeather(city) {
    try {
        // Fetch weather data
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Update UI with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";

        // Update weather icon based on conditions
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } 

    } catch (error) {
        console.error(error);
        
        // Update UI with error message
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".tem").innerHTML = "--";
        document.querySelector(".humidity").innerHTML = "--";
        document.querySelector(".windspeed").innerHTML = "--";

        // Default weather icon in case of error
        weatherIcon.src = "images/error.png";
    }
}

// Add event listener for the search button
mainBtn.addEventListener("click", () => {
    const city = searchBox.value.trim(); // Trim whitespace
    if (city) {
        checkWeather(city);
    } else {
        // Handle empty input
        document.querySelector(".city").innerHTML = "Please enter a city";
        document.querySelector(".tem").innerHTML = "--";
        document.querySelector(".humidity").innerHTML = "--";
        document.querySelector(".windspeed").innerHTML = "--";
        weatherIcon.src = "images/error.png";
    }
});

// let apiKey = "f7acc0e1c0dac1ced006bb0f48592e67";
// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const mainBtn = document.querySelector(".search button");
// const weatherIcon=document.querySelector(".img")

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
//         if (!response.ok) {
//             throw new Error("City not found");
//         }
        
//         const data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";
//     } catch (error) {
//         console.error(error);
//         document.querySelector(".city").innerHTML = "City not found";
//         document.querySelector(".tem").innerHTML = "--";
//         document.querySelector(".humidity").innerHTML = "--";
//         document.querySelector(".windspeed").innerHTML = "--";
//     }

//     if(data.weather[0].main == "Clouds"){
//         weatherIcon.src ="images/clouds.png";
//     }
//     else if (data.weather[0].main == "Clear"){
//         weatherIcon.src ="images/clear.png";
//     }
//     else if (data.weather[0].main == "Rain"){
//         weatherIcon.src ="images/rain.png";
//     }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src ="images/drizzle.png";
//     } 
//     else if(data.weather[0].main == "Mist"){
//         weatherIcon.src ="images/mist.png";
//     }
// }

// mainBtn.addEventListener("click", () => {                 
//     checkWeather(searchBox.value);
// });

// let apiKey = "f7acc0e1c0dac1ced006bb0f48592e67";
// let apiUrl ="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

// async function  checkWeather(city){
//     const response =await fetch (apiUrl + city + `&appid=${apiKey}`);
//     let data =await response.json();
//     const searchBox =document.querySelector(".search input");
//     let maintBtn =document.querySelector(".search button");

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".tem").innerHTML = Math.round(data.main.temp )+ "°C";
//     document.querySelector(".humidity").innerHTML =data.main.humidity + "%" ;
//     document.querySelector(".windspeed").innerHTML =data.wind.speed + " km/h";
// }
// mainBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// }) ;


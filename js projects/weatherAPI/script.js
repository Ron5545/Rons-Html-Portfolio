

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "fc9ca1b039f5f51346dbdf4068ea8fb0";
/* const apiKey = "2ff311ecd68e22cecea6d4e60bbce44d"; */

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
            console.log(weatherData);
        }
        catch (error) {
            console.log(error);
            displayError(error);
        }


    } else {
        displayError("please enter a city");
    }

});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    const response = await fetch(apiUrl);


    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeatherInfo(data) {

    const { name: city,
        sys: { country },
        main: { temp, humidity },
        weather: [{ description, /* id, */ icon }] } = data;


    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    /* const weatherEmoji = document.createElement("p"); */
    const weatherDivImg = document.createElement("div");
    const weatherImage = document.createElement("img");


    cityDisplay.textContent = `${country}, ${city}`;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    /* weatherEmoji.textContent = getWeatherEmoji(id); */
    weatherImage.setAttribute('src', `images/${icon}.png`);



    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    /* weatherEmoji.classList.add("weatherEmoji"); */
    weatherImage.classList.add("weatherEmoji")



    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    /* card.appendChild(weatherEmoji); */
    card.appendChild(weatherDivImg);
    weatherDivImg.appendChild(weatherImage);

}

/* function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
} */

function displayError(massage) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = massage;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



/*         <h1 class="cityDisplay" > Miami</ >
        <p class="tempDisplay">90°F</p>
        <p class="humidityDisplay">Humidity: 75%</p>
        <p class="descDisplay">ClearSkies</p>
        <p class="weatherEmoji">🌞</p>
        <p class="errorDisplay">Please Enter A City</p>  */



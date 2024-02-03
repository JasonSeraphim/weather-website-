const mockWeatherData = {
    Delhi: {
        temperature: 15,
        description: 'Partly Cloudy'
    },
    Pune: {
        temperature: 22,
        description: 'Clear Sky'
    },
    Kerala: {
        temperature: 34,
        description: 'Partly Cloudy'
    },
    Faridabad: {
        temperature: 20,
        description: 'Mostly Sunny'
    },
    Lavasa: {
        temperature: 29,
        description: 'Mostly Sunny'
    },
    Mumbai: {
        temperature: 29,
        description: 'Mostly Sunny'
    },
    Gujrat: {
        temperature: 18,
        description: 'Sunny'
    },
    Punjab: {
        temperature: 18,
        description: 'Rainy'
    },
    Haryana: {
        temperature: 19,
        description: 'Windy'
    },
    Bengaluru: {
        temperature: 30,
        description: 'Partly Cloudy'
    },
    Jodhpur: {
        temperature: 27,
        description: 'Mostly Sunny'
    },
    Agra: {
        temperature: 22,
        description: 'Humid'
    },
    
    
};

function getWeather(city) {
    const weatherInfo = document.getElementById('weather-info');

    if (mockWeatherData[city]) {
        const { temperature, description } = mockWeatherData[city];
        
        const weatherHtml = `
            <p>City: ${city}</p>
            <p>Temperature: ${temperature} °C</p>
            <p>Description: ${description}</p>
        `;

        weatherInfo.innerHTML = weatherHtml;
    } else {
        weatherInfo.innerHTML = '<p>Weather data not available for this city.</p>';
    }
}

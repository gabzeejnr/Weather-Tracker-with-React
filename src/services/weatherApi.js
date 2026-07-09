async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    if (!city || city.length === 1) return;

    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Failed to fetch location data.");

        const data = await response.json();

        if (!data.results || data.results.length === 0) throw new Error("City not found.");

        const location = data.results[0];

        return {
            latitude: location.latitude,
            longitude: location.longitude,
            name: location.name,
            country: location.country
        };

    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getWeather(latitude, longitude) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&daily=sunrise,sunset,uv_index_max&hourly=temperature_2m,uv_index&timezone=auto`.replace(/\s+/g, "");

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.")
        }

        const data = await response.json();
        console.log(data);

        return {
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,

            sunrise: data.daily.sunrise[0],
            sunset: data.daily.sunset[0],
            uvIndex: data.daily.uv_index_max[0],
            hourlytemp: data.hourly.temperature_2m,
            hours: data.hourly.time
        }

    } catch (error) {
        console.error("Failed to get data:", error.message);
        return null;
    }
}

export async function searchWeather(city) {
    const location = await getCoordinates(city);
    if (!location) return null;
    const weather = await getWeather(location.latitude, location.longitude)
    return {
        ...location,
        ...weather
    }
}
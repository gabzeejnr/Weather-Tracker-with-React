import Header from "../../components/Header/Header.jsx";
import Title from "../../components/Title/Title.jsx";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather.jsx";
import AirCondition from "../../components/AirCondition/AirCondition.jsx";
import Input from "../../components/Input/Input.jsx";
import { useEffect, useState } from "react";
import { convertTo12Hour } from "../../utils/dateUtils.js";
import { searchWeather } from "../../services/weatherApi.js";
import TemperatureChart from "../../components/TemperatureChart.jsx";
import styles from "./Dashboard.module.scss"

export default function Dashboard() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hourlyTemp, setHourlyTemp] = useState("")

    useEffect(() => {
        let isMounted = true;

        async function handleSearch() {
            if (!city.trim()) return;

            try {
                setLoading(true);
                setError("");

                const data = await searchWeather(city);
                console.log(data);

                setWeather(data);
            } catch (err) {
                setError(err.message);
                setWeather(null);
            } finally {
                setLoading(false);
            }
        }
        handleSearch();

        return () => isMounted = false
    }, [city])

    return (
        <>
            {console.log(weather)}
            <Header city={city} setCity={setCity} />
            <Title title={"Gabriel Matters"} />
            {weather && <>
                <CurrentWeather temp={weather.temperature} city={weather.name}
                    weatherCode={weather.weatherCode} hourlyData={weather.hourlytemp} time={weather.hours} />
                <AirCondition hum={weather.humidity} wind={weather.windSpeed} uv={weather.uvIndex} sunrise={weather.sunrise.split("T")[1]} sunset={convertTo12Hour(weather.sunset.split("T")[1])} />
            </>}

            <div className={styles.data}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

        </>
    );
}
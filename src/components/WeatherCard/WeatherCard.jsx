import styles from "./WeatherCard.module.scss";
import { weatherCodes } from "../../utils/weatherCode";

export default function WeatherCard({temp, humidity, speed, city, country, weatherCode}) {
    return(
        <section className={styles["weather-card"]}>
            <span className={styles.temperature}>Temperature: {temp}°C</span>
            <span className={styles.humidity}>Humidity: {humidity}%</span>
            <span className={styles["wind-speed"]}>Wind Speed: {speed} km/h</span>
            <div className={styles.text}>
                <span>City: {city}</span>
                <span>Country: {country}</span>
                <span>Weather Code: {weatherCodes[weatherCode] ?.text ?? "Unknown"}</span>
            </div>
        </section>
    )
}
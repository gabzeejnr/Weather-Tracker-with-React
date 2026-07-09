import Left from "./Left/Left.jsx";
import Right from "./Right/Right.jsx";
import styles from "./CurrentWeather.module.scss"
export default function CurrentWeather({temp, city, weatherCode, hourlyData, time}) {
    return(
        <section className={styles.wrapper}>
            <Left temp={temp} city={city} weatherCode={weatherCode} />
            <Right hourlyData={hourlyData} time={time} />
        </section>
    )
}
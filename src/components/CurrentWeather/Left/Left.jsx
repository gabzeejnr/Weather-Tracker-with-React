import { weatherCodes } from "../../../utils/weatherCode.js";
import styles from "./Left.module.scss";

export default function Left({temp, city, weatherCode}) {
    return(
        <section className={styles["left-wrap"]}>
            <p>{temp}°C</p>
            <p>{city}</p>
            <p>{weatherCodes[weatherCode]?.text ?? "Unknown"}</p>
        </section>
    )
}
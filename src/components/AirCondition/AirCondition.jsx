import styles from "./AirCondition.module.scss";

export default function AirCondition({hum, wind, uv, sunrise, sunset}) {
    return(
        <section className={styles.wrapper}>
            <div className={styles.condition}>
                <h3>Humidity</h3>
                <span className={styles.value}>{hum ? `${hum} km/h` : "Unknown"}</span>
            </div>
            <div className={styles.condition}>
                <h3>Wind</h3>
                <span className={styles.value}>{wind ? `${wind} km/h` : "Unknown"}</span>
            </div>
            <div className={styles.condition}>
                <h3>UV</h3>
                <span className={styles.value}>{uv ? `${uv}` : "Unknown"}</span>
            </div>
            <div className={styles.condition}>
                <h3>Sunrise</h3>
                <span className={styles.value}>{sunrise ? `${sunrise} AM` : "Unknown"}</span>
            </div>
            <div className={styles.condition}>
                <h3>Sunset</h3>
                <span className={styles.value}>{sunset ? sunset : "Unknown"}</span>
            </div>
        </section>
    )
}
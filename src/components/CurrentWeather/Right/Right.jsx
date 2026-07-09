import styles from "./Right.module.scss";
import TemperatureChart from "../../TemperatureChart";

export default function Right({ hourlyData, time }) {
    return (
        <section className={styles["right-wrap"]}>
            <TemperatureChart hourlyData={hourlyData} time={time} />
        </section>
    )
}
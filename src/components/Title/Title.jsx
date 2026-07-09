import { useState, useEffect } from "react";
import styles from "./Title.module.scss";
import { dateTimeFormat } from "../../utils/dateUtils";

export default function Header({title}) {
    //TIME
    const [time, setTime] = useState(new Date());
    const data = dateTimeFormat(time)

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        
        return () => clearInterval(interval)
    }, []);


    return (
        <section className={styles["section-wrapper"]}>
            <div className={styles.left}>
                <h2>{title}</h2>
                <div>
                    Live Weather Updates | {data.year}&ensp;{data.date}
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.blink}></div>
            </div>
        </section>
    );
}
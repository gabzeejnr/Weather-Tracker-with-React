import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input.jsx"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header({city, setCity}) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const bdy = document.body
        isDarkMode ? bdy.classList.add("dark-theme") : bdy.classList.remove("dark-theme")
    })

    return(
        <header className={styles["header-wrapper"]}>
            <Input city={city} setCity={setCity} />
            <button className={styles.right} onClick={() => setIsDarkMode(prev => !prev)}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                <span className={styles.mode}>{isDarkMode ? "Light" : "Dark"} Mode</span>
            </button>
        </header>
    );
}
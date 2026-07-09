import { useState } from "react";
import styles from "./Input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Input({ city, setCity }) {

    function handleClick() {
        setCity(city.trim());
    }
    function keyDown(e) {
        if (e.key === "Enter") handleClick();
    }

    return (
        <div className={styles.input}>
            <div className={styles["icon-wrap"]}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" maxLength={50} value={city}
                    placeholder="Enter Location..."
                    name="search-city" id="search-city"
                    onKeyDown={(e) => keyDown(e)}
                    onChange={(e) => setCity(e.target.value.trim())} />
            </div>
            <button onClick={handleClick}>Search City</button>
        </div>
    );
}
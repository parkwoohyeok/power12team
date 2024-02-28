import { useState } from "react";

/* eslint-disable */
import car from "assets/car.png";
import cliff from "assets/cliff.png";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={styles.ToggleButton} onClick={handleToggle}>
        <button
          className={`${styles.ChooseButton} ${toggle ? styles.ToggleChecked : ""}`}
        >
          컬러
        </button>
        <button
          className={`${styles.ChooseButton} ${toggle ? "" : styles.ToggleChecked}`}
        >
          이미지
        </button>
      </div>
      {toggle === true ? (
        <div className={styles.Colors}>
          <div className={`${styles.Color} ${styles.Orange}`}></div>
          <div className={`${styles.Color} ${styles.Purple}`}></div>
          <div className={`${styles.Color} ${styles.Blue}`}></div>
          <div className={`${styles.Color} ${styles.Green}`}></div>
        </div>
      ) : (
        <div className={styles.Photos}>
          <img className={styles.Photo} src={cliff} />
          <img className={styles.Photo} src={car} />
          <img className={styles.Photo} src={cliff} />
          <img className={styles.Photo} src={car} />
        </div>
      )}
    </>
  );
};

export default MessageToToggleButton;

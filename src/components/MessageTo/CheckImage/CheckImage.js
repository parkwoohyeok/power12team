import React from "react";
import styles from "./CheckImage.module.css";
import checkImage from "assets/check.png";

const CheckImage = ({ select, photo }) => {
  return (
    <>
      <div className={`${select !== photo ? styles.Blur : ""}`} />
      <img
        className={`${select !== photo ? styles.PhotoSelected : styles.ColorSelected}`}
        src={checkImage}
        alt="체크이미지"
      />
    </>
  );
};

export default CheckImage;

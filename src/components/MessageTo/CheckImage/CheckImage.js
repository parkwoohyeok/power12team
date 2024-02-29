import React from "react";

/* eslint-disable */
import checkImage from "assets/check.png";

import styles from "./CheckImage.module.css";

const CheckImage = () => {
  return <img className={styles.Selected} src={checkImage} alt="체크이미지" />;
};

export default CheckImage;

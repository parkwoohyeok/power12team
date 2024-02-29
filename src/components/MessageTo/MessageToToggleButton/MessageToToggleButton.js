import React, { useState } from "react";

/* eslint-disable */
import car from "assets/car.png";
import cliff from "assets/cliff.png";

import "../../../styles/color.css";
import styles from "./MessageToToggleButton.module.css";
import CheckImage from "../CheckImage/CheckImage";

const MessageToToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const [select, setSelect] = useState("Color");

  /* eslint-disable */
  const backgroundColor = {
    beige: "var(--Orange-20)",
    purple: "var(--Purple-20)",
    blue: "var(--Blue-20)",
    green: "var(--Green-20)",
  };

  const backgroundImageURL = {
    photo1: car,
    photo2: cliff,
    photo3: car,
    photo4: cliff,
  };

  const Colors = [
    backgroundColor.beige,
    backgroundColor.purple,
    backgroundColor.blue,
    backgroundColor.green,
  ];
  const Photos = ["photo1", "photo2", "photo3", "photo4"];

  const [selectedColor, setSelectedColor] = useState(Colors[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(Photos[0]);

  const options = toggle ? Colors : Photos;

  const handleToggle = () => {
    setToggle(!toggle);
    setSelect(toggle ? "Photo" : "Color");
  };

  const handleClick = (option) => {
    setSelect(option);
  };

  const handleSelect = (selectedOption) => {
    setSelectedColor(selectedOption);
    setSelectedPhoto(selectedOption);
  };

  return (
    <>
      <div className={styles.ToggleButton} onClick={handleToggle}>
        <button
          className={`${styles.ChooseButton} ${select === "Color" && styles.ToggleChecked}`}
          onClick={() => handleClick("Color")}
        >
          컬러
        </button>
        <button
          className={`${styles.ChooseButton} ${select === "Photo" && styles.ToggleChecked}`}
          onClick={() => handleClick("Photo")}
        >
          이미지
        </button>
      </div>
      {toggle ? (
        <div className={styles.Colors}>
          {options.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={styles.Color}
              onClick={() => handleSelect(color)}
            >
              {selectedColor === color ? <CheckImage /> : null}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.Photos}>
          {options.map((photo, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${backgroundImageURL[photo]})` }}
              className={styles.Photo}
              onClick={() => handleSelect(photo)}
            >
              {selectedPhoto === photo ? (
                <CheckImage select={select} photo={photo} />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MessageToToggleButton;

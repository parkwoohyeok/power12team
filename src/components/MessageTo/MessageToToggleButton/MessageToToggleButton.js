import React, { useState } from "react";

import CheckImage from "../CheckImage/CheckImage";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = ({ fetchBackgroundImageUrls, Colors }) => {
  const [toggle, setToggle] = useState(true);
  const [select, setSelect] = useState("Color");

  const [selectedColor, setSelectedColor] = useState(Colors[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(Photos[0]);

  const options = toggle ? Colors : fetchBackgroundImageUrls;

  const handleToggle = () => {
    setToggle(!toggle);
    setSelect(toggle ? "Photo" : "Color");
  };

  const handleClick = (option) => {
    setSelect(option);
  };

  const handleSelectColor = (selectedOption) => {
    setSelectedColor(selectedOption);
  };

  const handleSelectPhoto = (selectedOption) => {
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
              onClick={() => handleSelectColor(color)}
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
              onClick={() => handleSelectPhoto(photo)}
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

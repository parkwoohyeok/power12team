import React, { useState } from "react";

import CheckImage from "../CheckImage/CheckImage";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = ({ Colors, photos }) => {
  const [select, setSelect] = useState("Color");

  const [selectedColor, setSelectedColor] = useState(Colors[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  const handleToggle = () => {
    setSelect(select === "Photo" ? "Color" : "Photo");
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
      {select === "Color" ? (
        <div className={styles.Colors}>
          {Colors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={styles.Color}
              onClick={() => handleSelectColor(color)}
            >
              {selectedColor === color && <CheckImage />}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.Photos}>
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url('${photo}')` }}
              className={styles.Photo}
              onClick={() => handleSelectPhoto(photo)}
            >
              {selectedPhoto === photo && (
                <CheckImage select={select} photo={photo} />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MessageToToggleButton;

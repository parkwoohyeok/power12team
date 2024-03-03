import React from "react";

import CheckImage from "../CheckImage/CheckImage";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = ({
  COLORS,
  photos,
  selectedColor,
  selectedPhoto,
  setSelectedColor,
  setSelectedPhoto,
  select,
  setSelect,
}) => {
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
        <div className={styles.COLORS}>
          {COLORS.map((color) => (
            <div
              key={color}
              className={`${styles.Color} ${styles[color]}`}
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
              key={photo}
              style={{ backgroundImage: `url('${photo}')` }}
              className={styles.Photo}
              onClick={() => handleSelectPhoto(index)}
            >
              {selectedPhoto === index && (
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

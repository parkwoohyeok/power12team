import { useState } from "react";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = () => {
  const [color, setColor] = useState();
  const [image, setImage] = useState();
  return (
    <>
      <button className={styles.ChooseButton} value={color} setColor={setColor}>
        컬러
      </button>
      <button className={styles.ChooseButton} value={image} setImage={setImage}>
        이미지
      </button>
    </>
  );
};

export default MessageToToggleButton;

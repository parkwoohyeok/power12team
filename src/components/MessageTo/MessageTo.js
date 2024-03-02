import React, { useState } from "react";

/* eslint-disable */
import CreateButton from "./CreateButton/CreateButton";

import InputPost from "./InputPost/InputPost";

import styles from "./MessageTo.module.css";

import MessageToToggleButton from "./MessageToToggleButton/MessageToToggleButton";

import fetchBackgroundImageUrls from "components/Api/fetchBackgroundImageUrls";

import "../../styles/color.css";

/* eslint-disable */
const backgroundColor = {
  beige: "var(--Orange-20)",
  purple: "var(--Purple-20)",
  blue: "var(--Blue-20)",
  green: "var(--Green-20)",
};

const Colors = [
  backgroundColor.beige,
  backgroundColor.purple,
  backgroundColor.blue,
  backgroundColor.green,
];

const MessageTo = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const [backgroundUrl] = fetchBackgroundImageUrls();
  console.log(backgroundUrl);

  const onChange = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handleError = () => {
    if (!name) {
      setError(true);
    }
  };

  const recipientData = {
    name: name || "",
    backgroundColor: Colors || beige,
    backgroundUrl,
  };

  return (
    <div className={styles.PostPageBody}>
      <InputPost
        name={name}
        error={error}
        onChange={onChange}
        handleError={handleError}
      />
      <div className={styles.Center}>
        <div className={styles.ChooseText}>
          <div className={styles.ChooseView}>배경화면을 선택해 주세요.</div>
          <div className={styles.ChooseColorImage}>
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </div>
        </div>
        <MessageToToggleButton
          backgroundColor={backgroundColor}
          fetchBackgroundImageUrls={backgroundUrl}
          Colors={Colors}
        />
      </div>
      <CreateButton name={name} />
    </div>
  );
};

export default MessageTo;

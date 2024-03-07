/* eslint-disable */

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "components/common/Button/Button";

import InputPost from "./InputPost/InputPost";

import styles from "./MessageTo.module.css";

import MessageToToggleButton from "./MessageToToggleButton/MessageToToggleButton";

import fetchBackgroundImageUrls from "components/api/fetchBackgroundImageUrls";

import fetchPostPaper from "components/api/fetchPostPaper";

const COLORS = ["beige", "purple", "blue", "green"];

const MessageTo = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [select, setSelect] = useState("Color");

  const navigate = useNavigate();

  const handleClickCreateButton = () => {
    try {
      const recipientData =
        select === "Color"
          ? {
              name: name,
              backgroundColor: selectedColor || "beige",
            }
          : {
              name: name,
              backgroundColor: selectedColor || "beige",
              backgroundImageURL: photos[selectedPhoto],
            };

      fetchPostPaper(recipientData).then((v) => {
        navigate(`${v.id}`);
      });
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchBackgroundImageUrls().then((v) => {
      setPhotos(v);
    });
  }, []);

  const onChange = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handleError = () => {
    if (!name) {
      setError(true);
    }
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
          COLORS={COLORS}
          photos={photos}
          selectedColor={selectedColor}
          selectedPhoto={selectedPhoto}
          setSelectedColor={setSelectedColor}
          setSelectedPhoto={setSelectedPhoto}
          select={select}
          setSelect={setSelect}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <Button
        size="Large"
        type="submit"
        disabled={!name}
        onClick={handleClickCreateButton}
        children={"생성하기"}
      />
    </div>
  );
};

export default MessageTo;

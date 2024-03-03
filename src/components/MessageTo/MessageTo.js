import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable */
import CreateButton from "./CreateButton/CreateButton";

import InputPost from "./InputPost/InputPost";

import styles from "./MessageTo.module.css";

import MessageToToggleButton from "./MessageToToggleButton/MessageToToggleButton";

import fetchBackgroundImageUrls from "components/Api/fetchBackgroundImageUrls";

import "../../styles/color.css";
import usePostPaper from "components/Api/usePostPaper";
import useAsync from "hooks/useAsync";

/* eslint-disable */
const Colors = ["beige", "purple", "blue", "green"];

const MessageTo = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [post, setPost] = useState("");
  const [selectedColor, setSelectedColor] = useState(Colors[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const recipientData = {
    name: name,
    backgroundColor: selectedColor || "beige",
    //backgroundImageURL: photos[selectedPhoto],
  };
  console.log(recipientData);

  const [postPaperPending, postPaperError, postPaperAsync] =
    useAsync(usePostPaper);

  const paperPost = async () => {
    const result = await postPaperAsync(recipientData);
    if (result) alert(`롤링 페이퍼 생성 완료!`);
  };

  useEffect(() => {
    usePostPaper(recipientData).then((v) => {
      setPost();
    });
  });

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
          Colors={Colors}
          photos={photos}
          selectedColor={selectedColor}
          selectedPhoto={selectedPhoto}
          setSelectedColor={setSelectedColor}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
      {/* 수정예정 */}
      <Link to="./2697">
        <CreateButton name={name} onClick={paperPost} />
      </Link>
    </div>
  );
};

export default MessageTo;

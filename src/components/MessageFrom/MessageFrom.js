import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchImageUrls, sendMessageData } from "../api/MessageFromPageApi";

import FontSelect from "./FontSelect/FontSelect";
import styles from "./MessageFrom.module.css";
// import MessageFromSkeleton from "./MessageFromSkeleton";
import NameInput from "./NameInput/NameInput";
import ProfileSelect from "./ProfileSelect/ProfileSelect";
import RelationshipSelect from "./RelationshipSelect/RelationshipSelect";
import TextEditor from "./TextEditor/TextEditor";

/* eslint-disable */
import Button from "components/common/Button/Button";

function MessageFrom() {
  const fonts = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
  ];

  const options = [
    { value: "지인", label: "지인" },
    { value: "친구", label: "친구" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const navigate = useNavigate();
  const [content, setContent] = useState(""); // 사용자가 입력한 메시지 값 저장
  const [sender, setSender] = useState(""); // 사용자가 입력한 이름 값 저장
  const [relationship, setRelationship] = useState({
    value: "지인",
    label: "지인",
  });
  const [font, setFont] = useState(fonts[0]); // 사용자가 선택한 폰트 저장
  const [profileImageURL, setProfileImageURL] = useState();
  const [inputError, setInputError] = useState(""); // 입력에 대한 에러 메시지 저장
  const [imageUrls, setImageUrls] = useState([]);

  // 생성하기 버튼 활성화 조건 검사 함수
  const isButtonEnabled = sender.trim() !== "" && content.trim() !== "";
  const recipientPath = window.location.pathname.split("/post")[1];
  const recipientIdMatch = recipientPath.match(/\d+/); // 숫자 부분만 매칭
  const recipientId = recipientIdMatch ? parseInt(recipientIdMatch[0], 10) : 0;

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("profileImageURL", file);
    }
  };

  const handleRelationshipChange = (selectedOption) => {
    setRelationship(selectedOption);
  };

  const handleFontChange = (selectedOption) => {
    setFont(selectedOption);
  };

  const handleTextChange = (e) => {
    const textWithoutHtml = e.htmlValue
      ? e.htmlValue.replace(/<[^>]*>?/gm, "")
      : "";
    setContent(textWithoutHtml);
  };

  const handleImageSelect = (imageUrl) => {
    setProfileImageURL(imageUrl);
  };

  const fontValue = font ? font.value : "Noto Sans"; // font가 undefined일 경우 기본값으로 "Noto Sans" 사용

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 리로드 방지

    const messageData = {
      team: "4-12",
      sender,
      relationship: relationship.value || "지인",
      content,
      font: fontValue || "Noto Sans",
      profileImageURL,
    };
    try {
      const responseData = await sendMessageData(recipientId, messageData);
      console.log("Server response:", responseData);
      navigate(`/post/${recipientId}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const loadImageUrls = async () => {
      try {
        const urls = await fetchImageUrls();
        setImageUrls(urls);
        if (urls.length > 0) {
          setProfileImageURL(urls[0]);
        }
      } catch (error) {
        console.log("Failed to load image:", error);
      }
    };
    loadImageUrls();
  }, []);

  const defaultFontValue = fonts?.find((fnt) => fnt.value === "Noto Sans");
  const defaultRelationValue = options?.find(
    (option) => option.value === "지인",
  );

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.ParentContainer}>
        <div className={styles.BigContainer}>
          <NameInput
            sender={sender}
            setSender={setSender}
            inputError={inputError}
            setInputError={setInputError}
          />
          <ProfileSelect
            profileImageURL={profileImageURL}
            imageUrls={imageUrls}
            handleImageChange={handleImageChange}
            handleImageSelect={handleImageSelect}
          />
          <RelationshipSelect
            handleRelationshipChange={handleRelationshipChange}
            defaultValue={defaultRelationValue}
            relationship={relationship}
          />
          <TextEditor content={content} handleTextChange={handleTextChange} />
          <FontSelect
            defaultValue={defaultFontValue}
            handleFontChange={handleFontChange}
            value={font}
          />
        </div>
        <div className={styles.Bottom}>
          <Button
            size="Large"
            type="submit"
            disabled={!isButtonEnabled}
            children={"생성하기"}
          />
        </div>
      </form>
    </>
  );
}

export default MessageFrom;

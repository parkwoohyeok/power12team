import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { Editor } from "primereact/editor";

import Frame from "../../assets/Frame.png";
import { fetchImageUrls, sendMessageData } from "../Api/MessageFromPageApi";

import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./MessageFrom.module.css";
import NameInput from "./NameInput/NameInput";

function MessageFrom() {
  const navigate = useNavigate();
  const [content, setContent] = useState(""); // 사용자가 입력한 메시지 값 저장
  const [sender, setSender] = useState(""); // 사용자가 입력한 이름 값 저장
  const [relationship, setRelationship] = useState("지인");
  const [font, setFont] = useState(); // 사용자가 선택한 폰트 저장
  const [profileImageURL, setProfileImageURL] = useState();
  const [inputError, setInputError] = useState(""); // 입력에 대한 에러 메시지 저장
  const [imageUrls, setImageUrls] = useState([]);

  // 생성하기 버튼 활성화 조건 검사 함수
  const isButtonEnabled = sender.trim() !== "" && content.trim() !== "";
  const recipientPath = window.location.pathname.split("/post")[1];
  const recipientIdMatch = recipientPath.match(/\d+/); // 숫자 부분만 매칭
  const recipientId = recipientIdMatch ? parseInt(recipientIdMatch[0], 10) : 0;
  console.log(recipientId);

  const handleImageChange = async (e) => {
    // async 키워드를 추가
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("profileImageURL", file); // 'image'는 서버에서 요구하는 필드 이름에 맞춰야 합니다.

      try {
        const response = await fetch("서버의 이미지 업로드 API URL", {
          method: "POST",
          body: formData,
          // 필요한 경우 추가적인 헤더 설정
        });

        if (!response.ok) {
          throw new Error("이미지 업로드 실패");
        }

        const responseData = await response.json();
        const uploadedImageUrl = responseData.profileImageURL; // 'imageUrl'은 서버에서 반환하는 필드 이름에 맞춰야 합니다.
        setProfileImageURL(uploadedImageUrl); // 업로드된 이미지 URL을 상태에 저장
      } catch (error) {
        console.error("이미지 업로드 중 오류 발생:", error);
      }
    }
  };

  const handleRelationshipChange = (selectedOption) => {
    setRelationship(selectedOption.value);
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

  const fonts = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
  ];

  const fontValue = font ? font.value : "Noto Sans"; // font가 undefined일 경우 기본값으로 "Noto Sans" 사용

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 리로드 방지

    const messageData = {
      team: "4-12",
      sender,
      relationship: relationship || "지인",
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
    console.log(`버튼 활성화 상태: ${isButtonEnabled}`);
  }, [sender, content]);

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

  const customStyles = {
    control: (base) => ({
      ...base,
      height: "50px", // 컨트롤의 높이 설정
      minHeight: "50px", // 최소 높이 설정
      fontSize: "16px",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "16px", // 폰트 사이즈 설정
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "16px", // 플레이스홀더의 폰트 사이즈 설정
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "16px", // 드롭다운 옵션의 폰트 사이즈 설정
    }),
  };

  const options = [
    { value: "지인", label: "지인" },
    { value: "친구", label: "친구" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const defaultFontValue = fonts.find((fnt) => fnt.value === "Noto Sans");
  const defaultRelationValue = options.find(
    (option) => option.value === "지인",
  );

  const handleImageSelect = (imageUrl) => {
    setProfileImageURL(imageUrl);
  };

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
          <div className={styles.ProfileContainer}>
            <div className={styles.Title}>프로필 이미지</div>
            <div className={styles.Content}>
              <img
                className={styles.DefaultProfile}
                src={profileImageURL || Frame}
                alt="기본프로필"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              />
              <div className={styles.SelectProfile}>
                <div className={styles.SelectExplain}>
                  프로필 이미지를 선택해주세요!
                </div>
                <div className={styles.SelectImgs}>
                  {imageUrls.map((imageUrl, index) => (
                    <input
                      key={index}
                      type="image"
                      src={imageUrl}
                      alt="프로필 선택"
                      className={styles.SelectImg}
                      onClick={() => handleImageSelect(imageUrl)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.RelationContainer}>
            <div className={styles.Title}>상대와의 관계</div>
            <Select
              placeholder="상대와의 관계를 선택해주세요."
              options={options}
              className={styles.SelectBox}
              styles={customStyles}
              defaultValue={defaultRelationValue}
              onChange={handleRelationshipChange}
            ></Select>
          </div>
          <div className={styles.ContentContainer}>
            <div className={styles.Title}>내용을 입력해 주세요</div>
            <Editor
              value={content}
              onTextChange={handleTextChange}
              style={{ height: "320px", overflow: "auto" }}
            />
          </div>
          <div className={styles.FontContainer}>
            <div className={styles.Title}>폰트 선택</div>
            <Select
              options={fonts}
              className={styles.FontSelectBox}
              placeholder="사용할 폰트를 선택해주세요."
              styles={customStyles}
              defaultValue={defaultFontValue}
              onChange={handleFontChange}
            ></Select>
          </div>
        </div>
        <div className={styles.Bottom}>
          <button
            type="submit"
            className={`${styles.Button} ${!isButtonEnabled ? styles.ButtonDisabled : ""}`}
            disabled={!isButtonEnabled}
          >
            생성하기
          </button>
        </div>
      </form>
    </>
  );
}

export default MessageFrom;

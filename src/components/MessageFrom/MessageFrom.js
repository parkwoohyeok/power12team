import React, { useState, useEffect } from "react";
import Select from "react-select";

import { Editor } from "primereact/editor";

import Frame from "../../assets/Frame.png";

import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./MessageFrom.module.css";

function MessageFrom() {
  const [text, setText] = useState(""); // 사용자가 입력한 메시지 값 저장
  const [name, setName] = useState(""); // 사용자가 입력한 이름 값 저장
  const [inputError, setInputError] = useState(""); // 입력에 대한 에러 메시지 저장
  const [profileImage, setProfileImage] = useState(null); // 사용자가 선택한 프로필 이미지 저장

  // 생성하기 버튼 활성화 조건 검사 함수
  const isButtonEnabled = name?.trim() !== "" && text?.trim() !== "";

  const handleNameChange = (e) => {
    setName(e.target.value);
    setInputError(e.target.value ? "" : "값을 입력해 주세요.");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    console.log(`버튼 활성화 상태: ${isButtonEnabled}`);
  }, [name, text]);

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

  const fonts = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
  ];

  const defaultFontValue = fonts.find((font) => font.value === "Noto Sans");
  const defaultRelationValue = options.find(
    (option) => option.value === "지인",
  );

  return (
    <>
      <div className={styles.ParentContainer}>
        <div className={styles.BigContainer}>
          <div className={styles.NameContainer}>
            <div className={styles.Title}>From.</div>
            <input
              className={styles.NameInput}
              placeholder="이름을 입력해 주세요."
              value={name}
              onChange={handleNameChange}
            />
            {inputError && (
              <div className={styles.InputError}>{inputError}</div>
            )}
          </div>
          <div className={styles.ProfileContainer}>
            <div className={styles.Title}>프로필 이미지</div>
            <div className={styles.Content}>
              <img
                className={styles.DefaultProfile}
                src={profileImage || Frame}
                alt="기본프로필"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              ></img>
              <div className={styles.SelectProfile}>
                <div className={styles.SelectExplain}>
                  프로필 이미지를 선택해주세요!
                </div>
                <div className={styles.SelectImgs}>
                  <img
                    src={Frame}
                    alt="이미지선택"
                    className={styles.SelectImg}
                  ></img>
                  <img
                    src={Frame}
                    alt="이미지선택"
                    className={styles.SelectImg}
                  ></img>
                  <img
                    src={Frame}
                    alt="이미지선택"
                    className={styles.SelectImg}
                  ></img>
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
            ></Select>
          </div>
          <div className={styles.ContentContainer}>
            <div className={styles.Title}>내용을 입력해 주세요</div>
            <Editor
              value={text}
              onTextChange={(e) => setText(e.value)}
              styles={{ height: "320px" }}
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
            ></Select>
          </div>
        </div>
        <div className={styles.Bottom}>
          <button className={styles.Button} disabled={!isButtonEnabled}>
            생성하기
          </button>
        </div>
      </div>
    </>
  );
}

export default MessageFrom;

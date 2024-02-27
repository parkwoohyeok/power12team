import React, { useState } from "react";
import Select from "react-select";

import { Editor } from "primereact/editor";

import Frame from "../../assets/Frame.png";

import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./MessageFrom.module.css";

function MessageFrom() {
  const [text, setText] = useState("");
  const [name, setName] = useState(""); // 사용자가 입력한 이름 값 저장
  const [inputError, setInputError] = useState(""); // 입력에 대한 에러 메시지 저장

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setInputError("");
    } else {
      setInputError("값을 입력해 주세요.");
    }
  };

  const options = [
    { value: "친구", label: "친구" },
    { value: "지인", label: "지인" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const fonts = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
  ];

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
                src={Frame}
                alt="기본프로필"
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
            ></Select>
          </div>
          <div className={styles.ContentContainer}>
            <div className={styles.Title}>내용을 입력해 주세요</div>
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              styles={{ height: "320px" }}
            />
          </div>
          <div className={styles.FontContainer}>
            <div className={styles.Title}>폰트 선택</div>
            <Select
              options={fonts}
              className={styles.FontSelectBox}
              placeholder="사용할 폰트를 선택해주세요."
            ></Select>
          </div>
        </div>
        <div className={styles.Bottom}>
          <button className={styles.Button}>생성하기</button>
        </div>
      </div>
    </>
  );
}

export default MessageFrom;

import React, { useRef } from "react";
import Select from "react-select";

import { Editor } from "@toast-ui/react-editor";

import Frame from "../../assets/Frame.png";

import style from "./MessageFrom.module.css";

function MessageFrom() {
  const options = [
    { value: "친구", label: "친구" },
    { value: "지인", label: "지인" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "320px",
      height: "50px",
    }),
  };

  const editorRef = useRef();

  const onChangeGetHTML = () => {
    // 에디터에 입력된 내용을 HTML 태그 형태로 취득
    const data = editorRef.current.getInstance().getHTML();
    // Body에 담기
    setBody(data);
  };

  return (
    <>
      <div className={style.BigContainer}>
        <div className={style.NameContainer}>
          <div className={style.Title}>From.</div>
          <input
            className={style.NameInput}
            placeholder="이름을 입력해 주세요."
          />
        </div>
        <div className={style.ProfileContainer}>
          <div className={style.Title}>프로필 이미지</div>
          <div className={style.Content}>
            <img
              className={style.DefaultProfile}
              src={Frame}
              alt="기본프로필"
            ></img>
            <div className={style.SelectProfile}>
              <div className={style.SelectExplain}>
                프로필 이미지를 선택해주세요!
              </div>
              <div className={style.SelectImgs}>
                <img
                  src={Frame}
                  alt="이미지선택"
                  className={style.SelectImg}
                ></img>
                <img
                  src={Frame}
                  alt="이미지선택"
                  className={style.SelectImg}
                ></img>
                <img
                  src={Frame}
                  alt="이미지선택"
                  className={style.SelectImg}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className={style.RelationContainer}>
          <div className={style.Title}>상대와의 관계</div>
          <Select
            placeholder="상대와의 관계를 선택해주세요."
            options={options}
            className={style.SelectBox}
            styles={customStyles}
          ></Select>
        </div>
      </div>
    </>
  );
}

export default MessageFrom;

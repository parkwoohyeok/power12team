import React, { useState } from "react";
import Select from "react-select";

import { Editor } from "primereact/editor";

import Frame from "../../assets/Frame.png";

import "@toast-ui/editor/dist/toastui-editor.css";
import style from "./MessageFrom.module.css";

function MessageFrom() {
  const [text, setText] = useState("");
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
      <div className={style.ParentContainer}>
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
            ></Select>
          </div>
          <div className={style.ContentContainer}>
            <div className={style.Title}>내용을 입력해 주세요</div>
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "320px" }}
            />
          </div>
          <div className={style.FontContainer}>
            <div className={style.Title}>폰트 선택</div>
            <Select
              options={fonts}
              className={style.FontSelectBox}
              placeholder="사용할 폰트를 선택해주세요."
            ></Select>
          </div>
        </div>
        <div className={style.Bottom}>
          <button className={style.Button}>생성하기</button>
        </div>
      </div>
    </>
  );
}

export default MessageFrom;

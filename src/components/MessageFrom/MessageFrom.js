import React from "react";

import Frame from "../../assets/Frame.png";

import style from "./MessageFrom.module.css";

function MessageFrom() {
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
      </div>
    </>
  );
}

export default MessageFrom;

import React from "react";
import Select from "react-select";

import styles from "./FontSelect.module.css";

function FontSelect({ value, handleFontChange }) {
  const fonts = [
    { value: "Noto Sans", label: "Noto Sans" },
    { value: "Pretendard", label: "Pretendard" },
    { value: "나눔명조", label: "나눔명조" },
    { value: "나눔손글씨 손편지체", label: "나눔손글씨 손편지체" },
  ];

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

  return (
    <>
      <div className={styles.FontContainer}>
        <div className={styles.Title}>
          <span>폰트 선택</span>
        </div>
        <Select
          options={fonts}
          className={styles.FontSelectBox}
          styles={customStyles}
          onChange={handleFontChange}
          value={value}
        ></Select>
      </div>
    </>
  );
}

export default FontSelect;

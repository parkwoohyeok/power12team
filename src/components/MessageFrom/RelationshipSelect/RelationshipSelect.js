import React from "react";
import Select from "react-select";

import styles from "./RelationshipSelect.module.css";

function RelationshipSelect({
  defaultRelationValue,
  handleRelationshipChange,
}) {
  const options = [
    { value: "지인", label: "지인" },
    { value: "친구", label: "친구" },
    { value: "동료", label: "동료" },
    { value: "가족", label: "가족" },
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
      <div className={styles.RelationContainer}>
        <div className={styles.Title}>상대와의 관계</div>
        <Select
          placeholder="상대와의 관계를 선택해주세요."
          options={options}
          className={styles.SelectBox}
          styles={customStyles}
          defaultValue={defaultRelationValue}
          onChange={(selectedOption) =>
            handleRelationshipChange(selectedOption)
          }
        ></Select>
      </div>
    </>
  );
}

export default RelationshipSelect;

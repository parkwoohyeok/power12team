import React, { useState, useEffect } from "react";

import Frame from "../../../assets/Frame.png";

import styles from "./ProfileSelect.module.css";

function ProfileSelect({
  profileImageURL,
  imageUrls,
  handleImageChange,
  handleImageSelect,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setIsLoading(false);
    }
  }, [imageUrls]);

  return (
    <>
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
              {isLoading ? (
                <div className={styles.SkeletonImage}></div>
              ) : (
                imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt="프로필 선택"
                    className={styles.SelectImg}
                    onClick={() => handleImageSelect(imageUrl)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSelect;

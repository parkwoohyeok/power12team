/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "components/RecentList/RecentList.module.css";

import data from "mock/mock.json";

import arrow from "assets/arrow.png";

const RecentList = () => {
  return (
    <>
      <h2 className={styles.CardTitle}>최근에 만든 롤링 페이퍼⭐</h2>
      <div className={styles.Wrapper}>
        {data.map((info) => (
          <div
            key={info.id}
            className={`${styles["CardContainer"]} ${styles[info.backgroundColor]} `}
          >
            <div className={styles["CardInfo"]}>
              <h2>{`To.${info.name}`}</h2>
              <h2>이미지 컴포넌트</h2>
              <h2>인원수 컴포넌트</h2>
            </div>
            <div className={styles.CardFooter}>
              <div className={styles.HorizonLine}></div>
              <TopReactions />
            </div>
          </div>
        ))}
        <button className={styles.SlideBtn_R}>
          <img src={arrow} alt="슬라이드 버튼" />
        </button>
        <button className={styles.SlideBtn_L}>
          <img src={arrow} alt="슬라이드 버튼" />
        </button>
      </div>
    </>
  );
};

export default RecentList;

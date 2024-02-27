/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "./HotList.module.css";

import data from "mock/mock.json";

import arrow from "assets/arrow.png";

import MessageSummary from "components/MessageSummary/MessageSummary";
import { useState } from "react";

function HotList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardSlidingToRight, setCardSlidingToRight] = useState(false);
  const [cardSlidingToLeft, setCardSlidingToLeft] = useState(false);
  const ArrayData = [...data];
  const CARDS_PER_PAGE = 4;
  const totalPages = Math.ceil(ArrayData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = Math.min(startIndex + CARDS_PER_PAGE, ArrayData.length);
  const HotCards = ArrayData.slice(startIndex, endIndex);

  const nextPage = () => {
    setCardSlidingToRight(true);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setTimeout(() => {
      setCardSlidingToRight(false);
    }, 200);
  };

  const prevPage = () => {
    setCardSlidingToLeft(true);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setTimeout(() => {
      setCardSlidingToLeft(false);
    }, 200);
  };

  return (
    <>
      <h2 className={styles.CardTitle}>인기 롤링 페이퍼🔥</h2>
      <div layout className={styles.Wrapper}>
        {HotCards.map((info) => (
          <div
            key={info.id}
            className={`${styles["CardContainer"]} ${styles[info.backgroundColor]} ${cardSlidingToRight ? styles["slide-out-R"] : ""} ${cardSlidingToLeft ? styles["slide-out-L"] : ""}`}
          >
            <div className={styles["CardInfo"]}>
              <h2>{`To.${info.name}`}</h2>
              <MessageSummary />
            </div>
            <div className={styles.CardFooter}>
              <div className={styles.HorizonLine}></div>
              <TopReactions />
            </div>
          </div>
        ))}
        <button
          className={`${styles.SlideBtn_R} ${currentPage === totalPages ? styles.EndOfPage : ""}`}
          onClick={nextPage}
        >
          <img src={arrow} alt="슬라이드 버튼" />
        </button>
        <button
          className={`${styles.SlideBtn_L} ${currentPage === 1 ? styles.EndOfPage : ""}`}
          onClick={prevPage}
        >
          <img src={arrow} alt="슬라이드 버튼" />
        </button>
      </div>
    </>
  );
}

export default HotList;

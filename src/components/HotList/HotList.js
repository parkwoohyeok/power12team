/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "./HotList.module.css";

import data from "mock/mock.json";

import arrow from "assets/arrow.png";

import MessageSummary from "components/ListPage/MessageSummary/MessageSummary";

import { useEffect, useState } from "react";

function HotList() {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardSlidingToRight, setCardSlidingToRight] = useState(false);
  const [cardSlidingToLeft, setCardSlidingToLeft] = useState(false);
  const ArrayData = [...data];
  const totalPages = Math.ceil(ArrayData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, ArrayData.length);
  const HotCards = ArrayData.slice(startIndex, endIndex);

  const updateCardsPerPage = () => {
    if (window.innerWidth <= 949) {
      setCardsPerPage(ArrayData.length);
    } else {
      setCardsPerPage(4);
    }
  };

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

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 화면 크기가 변경될 때마다 실행
    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage); // 화면 크기 변경 감지
    return () => {
      window.removeEventListener("resize", updateCardsPerPage); // 컴포넌트가 언마운트될 때 리스너 제거
    };
  }, []);

  return (
    <>
      <h2 className={styles.CardTitle}>인기 롤링 페이퍼🔥</h2>
      <div layout className={styles.Wrapper}>
        {HotCards.map((info) => (
          <div
            style={
              info.backgroundImageURL
                ? {
                    backgroundImage: `url(${info.backgroundImageURL})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "white",
                  }
                : {}
            }
            key={info.id}
            className={`${styles["CardContainer"]} ${info.backgroundColor ? styles[info.backgroundColor] : ""}  ${cardSlidingToRight ? styles["slide-out-R"] : ""} ${cardSlidingToLeft ? styles["slide-out-L"] : ""}`}
          >
            {console.log(info.backgroundImageURL)}
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

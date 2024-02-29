/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "components/RecentList/RecentList.module.css";

import data from "mock/mock.json";

import arrow from "assets/arrow.png";
import MessageSummary from "components/ListPage/MessageSummary/MessageSummary";
import { useEffect, useState } from "react";

const RecentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [cardSlidingToRight, setCardSlidingToRight] = useState(false);
  const [cardSlidingToLeft, setCardSlidingToLeft] = useState(false);

  const sortedData = [...data].sort((a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();
    return timeB - timeA;
  });

  const totalPages = Math.ceil(data.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, data.length);
  const currentCards = sortedData.slice(startIndex, endIndex);

  const updateCardsPerPage = () => {
    if (window.innerWidth <= 949) {
      setCardsPerPage(sortedData.length);
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
    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  return (
    <>
      <h2 className={styles.CardTitle}>최근에 만든 롤링 페이퍼⭐</h2>
      <div className={styles.Wrapper}>
        {currentCards.map((info) => (
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
            className={`${styles["CardContainer"]} ${styles[info.backgroundColor]} ${cardSlidingToRight ? styles["slide-out-R"] : ""} ${cardSlidingToLeft ? styles["slide-out-L"] : ""} `}
          >
            <div className={styles["CardInfo"]}>
              <h2>{`To.${info.name}`}</h2>
              <MessageSummary />
            </div>
            <div className={styles.CardFooter}>
              <div className={styles.HorizonLine}></div>
              {/* <TopReactions /> */}
            </div>
          </div>
        ))}
        <button
          className={`${styles.SlideBtn_R} ${currentPage === totalPages ? styles.EndOfPage : ""}
        `}
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
};

export default RecentList;

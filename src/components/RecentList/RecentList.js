/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "components/RecentList/RecentList.module.css";

import arrow from "assets/arrow.png";
import MessageSummary from "components/ListPage/MessageSummary/MessageSummary";
import { useEffect, useState } from "react";
import useAsync from "hooks/useAsync";
import useGetRecipients from "components/Api/useGetRecipients";

const RecentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [cardSlidingToRight, setCardSlidingToRight] = useState(false);
  const [cardSlidingToLeft, setCardSlidingToLeft] = useState(false);
  const [recipientData, setrecipientData] = useState([]);

  const [getRecipientPending, getRecipientError, getRecipientsAsync] =
    useAsync(useGetRecipients);

  const recipientGet = async () => {
    const response = await getRecipientsAsync();
    setrecipientData(response.data?.results);
    updateCardsPerPage(response.data?.count);
  };

  const sortedData = recipientData.sort((a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();
    return timeB - timeA;
  });

  const totalPages = Math.ceil(sortedData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, sortedData.length);
  const currentCards = sortedData.slice(startIndex, endIndex);

  const updateCardsPerPage = () => {
    if (recipientData && recipientData.length > 0)
      if (window.innerWidth <= 949) {
        setCardsPerPage(sortedData?.length);
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
    recipientGet();
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, [recipientData]);

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
              <MessageSummary data={info} />
            </div>
            <div className={styles.CardFooter}>
              <div className={styles.HorizonLine}></div>
              <TopReactions datas={info} />
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

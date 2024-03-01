/* eslint-disable */

import TopReactions from "components/TopReactions/TopReactions";

import styles from "./HotList.module.css";

import arrow from "assets/arrow.png";

import MessageSummary from "components/ListPage/MessageSummary/MessageSummary";

import { useEffect, useState } from "react";

import useAsync from "hooks/useAsync";

import useGetRecipients from "components/Api/useGetRecipients";

function HotList() {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardSlidingToRight, setCardSlidingToRight] = useState(false);
  const [cardSlidingToLeft, setCardSlidingToLeft] = useState(false);
  const [recipientData, setrecipientData] = useState([]);
  const [getRecipientPending, getRecipientError, getRecipientsAsync] =
    useAsync(useGetRecipients);

  const recipientGet = async () => {
    const response = await getRecipientsAsync();
    setrecipientData(response?.data.results);
    updateCardsPerPage(response?.data.count);
  };

  const HotData = recipientData.sort((a, b) => {
    const CardA = a.reactionCount;
    const CardB = b.reactionCount;
    return CardB - CardA;
  });

  const totalPages = Math.ceil(HotData.length / 4);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, HotData.length);
  const HotCards = HotData.slice(startIndex, endIndex);

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

  const updateCardsPerPage = () => {
    if (recipientData && recipientData.length > 0)
      if (window.innerWidth <= 949) {
        setCardsPerPage(HotData?.length);
        setCurrentPage(1);
      } else {
        setCardsPerPage(4);
      }
  };

  useEffect(() => {
    recipientGet();
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
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

/* eslint-disable */

import styles from "./HotList.module.css";

import arrow from "assets/arrow.png";

import { useState } from "react";

import { Link } from "react-router-dom";

import ListCards from "components/ListCardsTest/ListCards";

import { AnimatePresence, motion } from "framer-motion";

function HotList({ recipientData, fetchData, hasNextPage }) {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  // const updateCardsPerPage = () => {
  //   if (recipientData?.length > 0)
  //     if (window.innerWidth <= 949) {
  //       setCardsPerPage(recipientData?.length);
  //       // setCurrentPage(1);
  //     } else {
  //       setCardsPerPage(4);
  //     }
  // };

  const totalPages = Math.ceil(recipientData?.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, recipientData?.length);
  const HotCards = recipientData?.slice(startIndex, endIndex);

    const boxVariants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 }
  })
  };
  

  const nextPlease = () => {
    if (hasNextPage !== false) {
      fetchData();
    }
    setBack(false);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        setVisible((prevPage) => Math.min(prevPage + 1, totalPages)
    );
  };
  const prevPlease = () => {
    setBack(true);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setVisible((prevPage) => Math.max(prevPage - 1, 1))
  };

  // useEffect(() => {
  //   updateCardsPerPage();
  // }, [recipientData]);

  // useEffect(() => {
  //   window.addEventListener("resize", updateCardsPerPage);
  //   return () => {
  //     window.removeEventListener("resize", updateCardsPerPage);
  //   };
  // }, []);

  return (
    <>
      <h2 className={styles.CardTitle}>인기 롤링 페이퍼🔥</h2>
        <motion.div className={styles.SlideWrap}>
          <AnimatePresence custom={back}>
            <motion.div className={styles.box}
            custom={back}
            variants={boxVariants}
            initial="entry"
            animate="center"
            exit="exit"
            key={visible}>
            <div className={styles.Wrapper}>
        {HotCards?.map((info) => (
          <ListCards
            info={info}
          />
        ))}

        <button
          className={`${styles.SlideBtn_R} ${currentPage !== 1 && currentPage === totalPages ? styles.EndOfPage : ""}`}
          onClick={nextPlease}
        >
          <img src={arrow} alt="슬라이드 버튼" />
        </button>
        <button
          className={`${styles.SlideBtn_L} ${currentPage === 1 ? styles.EndOfPage : ""}`}
          onClick={prevPlease}
        >
          <img src={arrow} alt="슬라이드 버튼" />
            </button>
            </div>
          </motion.div>
          </AnimatePresence>
          </motion.div>
    </>
  );
}

export default HotList;

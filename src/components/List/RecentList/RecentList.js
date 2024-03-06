/* eslint-disable */

import styles from "components/RecentList/RecentList.module.css";

import arrow from "assets/arrow.png";

import { useState, useEffect } from "react";

import ListCards from "components/List/ListCards/ListCards";

import { AnimatePresence, motion } from "framer-motion";

import { debounce } from "lodash";

import { useInView } from "react-intersection-observer";

const RecentList = ({ data, hasNextPage, fetchData, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({ initialInView: false });

  const totalPages = Math.ceil(data?.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, data?.length);

  const currentCards = data?.slice(startIndex, endIndex);

  const boxVariants = {
    entry: (back) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (back) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5 },
    }),
  };

  const nextPlease = () => {
    if (hasNextPage !== false) {
      fetchData();
    }
    setBack(false);
    setCurrentPage((prevPage) => prevPage + 1);
    setVisible((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const prevPlease = () => {
    setBack(true);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setVisible((prevPage) => Math.max(prevPage - 1, 1));
  };

  const bringData = () => {
    if (hasNextPage !== false) {
      fetchData();
    }
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleResize = debounce(() => {
    if (window.innerWidth <= 949) {
      setIsMobile(true);
      setCardsPerPage(100);
    } else {
      setIsMobile(false);
      setCardsPerPage(4);
    }
  }, 200);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && inView) {
      bringData();
    }
  }, [inView]);

  return (
    <>
      <div className={styles.listcontainer}>
        <h2 className={styles.CardTitle}>최근에 만든 롤링 페이퍼⭐</h2>
        <motion.div className={styles.SlideWrap}>
          <AnimatePresence custom={back}>
            <motion.div
              className={styles.box}
              custom={back}
              variants={boxVariants}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              <div className={styles.Wrapper}></div>
              <div className={styles.Wrapper}>
                {currentCards?.map((info) => {
                  console.log(info);
                  return <ListCards info={info} key={info.id} />;
                })}
                <div
                  className={`${styles.moreData} ${!isLoading && isMobile ? styles["isMobile"] : ""}`}
                  ref={ref}
                >
                  더보기
                </div>
                <button
                  className={`${styles.SlideBtn_R} ${currentPage !== 1 && hasNextPage === false ? styles.EndOfPage : ""}`}
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
      </div>
    </>
  );
};

export default RecentList;

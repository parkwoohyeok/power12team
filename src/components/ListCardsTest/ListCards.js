/* eslint-disable */

import styles from "components/ListCardsTest/ListCards.module.css";
import MessageSummary from "components/MessageSummary/MessageSummary";
import TopReactions from "components/TopReactions/TopReactions";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const ListCards = ({ info }) => {
  return (
    <>
      <div
        style={
          info?.backgroundImageURL
            ? {
                backgroundImage: `url(${info?.backgroundImageURL})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "white",
              }
            : {}
        }
        key={info?.id}
        className={`${info.backgroundImageURL ? styles.SkeletonImage : `${styles["CardContainer"]} ${styles[info.backgroundColor]}`}`}
      >
        <div className={styles["Cardinfo"]}>
          <h2 className={styles.Receiver}>{`To.${info?.name}`}</h2>
          <MessageSummary data={info} />
        </div>
        <div className={styles.CardFooter}>
          <div className={styles.HorizonLine}></div>
          <TopReactions datas={info} />
        </div>
      </div>
    </>
  );
};

export default ListCards;

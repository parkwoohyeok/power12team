/* eslint-disable */

import styles from "components/ListCards/ListCards.module.css";
import MessageSummary from "components/MessageSummary/MessageSummary";
import TopReactions from "components/TopReactions/TopReactions";
import { Link } from "react-router-dom";

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
        className={`${styles["CardContainer"]} ${info.backgroundImageURL ? styles.SkeletonImage : styles[info.backgroundColor]}`}
      >
        <Link className={styles.link} to={`/post/${info.id}`}>
          <div className={styles["Cardinfo"]}>
            <h2 className={styles.Receiver}>{`To.${info?.name}`}</h2>
            <MessageSummary data={info} />
          </div>
          <div className={styles.CardFooter}>
            <div className={styles.HorizonLine}></div>
            <TopReactions datas={info} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListCards;

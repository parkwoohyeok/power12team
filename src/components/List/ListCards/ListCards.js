/* eslint-disable */

import styles from "components/List/ListCards/ListCards.module.css";
import MessageSummary from "components/common/MessageSummary/MessageSummary";
import TopReactions from "components/common/TopReactions/TopReactions";
import { Link } from "react-router-dom";

const ListCards = ({ info }) => {
  return (
    <>
      <Link to={`/post/${info.id}`}>
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
          <div className={styles["Cardinfo"]}>
            <h2 className={styles.Receiver}>{`To.${info?.name}`}</h2>
            <MessageSummary data={info} />
          </div>
          <div className={styles.CardFooter}>
            <div className={styles.HorizonLine}></div>
            <TopReactions datas={info} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListCards;

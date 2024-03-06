/* eslint-disable */

import styles from "components/ListCards/ListCards.module.css";
import MessageSummary from "components/MessageSummary/MessageSummary";
import TopReactions from "components/TopReactions/TopReactions";
import { Link } from "react-router-dom";

const ListCards = ({ info }) => {
  console.log(info);
  return (
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
        className={`${styles.CardContainer} ${info.backgroundImageURL ? styles.SkeletonImage : styles[info.backgroundColor]}`}
      >
        <div className={styles.Cardinfo}>
          <h2 className={styles.Receiver}>{`To.${info?.name}`}</h2>
          <MessageSummary data={info} />
        </div>
        <div className={styles.CardFooter}>
          <div className={styles.HorizonLine}></div>
          <TopReactions datas={info?.topReactions} />
          {!info?.topReactions.length && (
            <div className={styles.NoReaction}></div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ListCards;

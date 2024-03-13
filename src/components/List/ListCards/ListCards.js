import styles from "components/List/ListCards/ListCards.module.css";
import { Link } from "react-router-dom";
import MessageSummary from "components/List/ListCards/MessageSummary/MessageSummary";
import TopReactions from "components/common/TopReactions/TopReactions";

const ListCards = ({ info, isLoading }) => {
  const name =
    info?.name.length > 8 ? `${info?.name.slice(0, 8)}...` : info?.name;
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
            <h2 className={styles.Receiver}>
              {info?.name.length > 6
                ? `To.${info?.name.slice(0, 6)}..`
                : `To.${info?.name}`}
            </h2>
            <MessageSummary data={info} />
          </div>
          <div className={styles.CardFooter}>
            <div className={styles.HorizonLine}></div>
            <TopReactions datas={info?.topReactions} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListCards;

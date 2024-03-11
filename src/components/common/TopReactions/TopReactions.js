/* eslint-disable */

import styles from "./TopReaction.module.css";

const TopReactions = ({ datas }) => {
  return (
    <div
      className={`${styles.ReactionContainer} ${datas.length === 0 ? styles["noCount"] : ""}`}
    >
      {datas?.map((reaction) => (
        <div key={reaction.id} className={styles.Reaction}>
          {reaction.emoji} {reaction.count > 99 ? "+99" : reaction.count}
        </div>
      ))}
    </div>
  );
};
export default TopReactions;

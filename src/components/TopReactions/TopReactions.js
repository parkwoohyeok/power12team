/* eslint-disable */

import styles from "./TopReaction.module.css";

const TopReactions = ({ datas }) => {
  return (
    <div
      className={`${styles.ReactionContainer} ${datas?.reactionCount === 0 ? styles["noCount"] : ""}`}
    >
      {datas.topReactions?.map((reaction) => (
        <div key={reaction.id} className={styles.Reaction}>
          {reaction.emoji} {reaction.count}
        </div>
      ))}
    </div>
  );
};
export default TopReactions;

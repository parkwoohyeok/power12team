/* eslint-disable */

import styles from "./TopReaction.module.css";

// import data from "mock/mock.json";
// const mapData = data[0].topReactions
// 위에만 추가하면 됨

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

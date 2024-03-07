/* eslint-disable */

import styles from "./TopReaction.module.css";

// import data from "mock/mock.json";
// const mapData = data[0].topReactions
// 위에만 추가하면 됨

const TopReactions = ({ mapData }) => {
  return (
    <div className={styles.ReactionContainer}>
      {mapData?.map((reaction) => (
        <div key={reaction.id} className={styles.Reaction}>
          {reaction.emoji} {reaction.count}
        </div>
      ))}
    </div>
  );
};
export default TopReactions;
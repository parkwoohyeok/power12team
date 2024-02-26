/* eslint-disable */

import data from "mock/mock.json";

import styles from "./TopReaction.module.css";

const TopReactions = () => {
  return (
    <div>
      {data[0].topReactions.map((reaction) => (
        <div key={reaction.id} className={styles.ReactionContainer}>
          {reaction.emoji} {reaction.count}
        </div>
      ))}
    </div>
  );
};
export default TopReactions;

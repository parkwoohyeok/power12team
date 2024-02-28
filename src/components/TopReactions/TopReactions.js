/* eslint-disable */
import data from "mock/mock.json";

import styles from "./TopReaction.module.css";

const TopReactions = () => {
  return (
    <div className={styles.ReactionContainer}>
      {data[0].topReactions.map((reaction) => (
        <div key={reaction.id} className={styles.Reaction}>
          {reaction.emoji} {reaction.count}
        </div>
      ))}
    </div>
  );
};
export default TopReactions;

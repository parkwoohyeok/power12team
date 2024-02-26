import TopReactions from "../TopReactions/TopReactions";

import styles from "./HotList.module.css";

function HotList() {
  return (
    <>
      <h2 className={styles.CardTitle}>인기 롤링 페이퍼</h2>
      <div className={styles.CardContainer}>
        {/* <h2 className={styles.Receiver}>{Data.name}</h2>
         <HowManyWrite/> */}
        <TopReactions />
      </div>
    </>
  );
}

export default HotList;

/* eslint-disable */
import HotList from "components/HotList/HotList";
import MessageSummary from "components/MessageSummary/MessageSummary";
import data from "mock/mock.json";
import styles from "./RecipientInfoBar.module.css";

const { name } = data[0];

function RecipientInfoBar() {
  return (
    <div className={styles["RecipientInfoBar-wrapper"]}>
      <div className={styles.RecipientInfoBar}>
        <div className={styles.name}>To. {name}</div>
        <div className={styles["Info-wrapper"]}>
          <MessageSummary />
          <div className={styles["rest-wrapper"]}>
            <HotList />
            <button>
              <img src="/src/assets/arrow_down.svg" alt="more emoji" />
            </button>
            <button className={styles.button}>
              <img
                src="/src/assets/add-emoji.svg"
                alt="add reaction"
                className={styles["button-icon"]}
              />
              추가
            </button>
            <button className={styles.button}>
              <img
                src="/src/assets/share.svg"
                alt="share icon"
                className={styles["button-icon"]}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientInfoBar;

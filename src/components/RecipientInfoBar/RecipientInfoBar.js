/* eslint-disable */
import HotList from "components/HotList/HotList";
import MessageSummary from "components/MessageSummary/MessageSummary";
import data from "mock/mock.json";
import styles from "./RecipientInfoBar.module.css";

const { name } = data[0];

function RecipientInfoBar() {
  return (
    <div className={styles.RecipientInfoBarWrapper}>
      <div className={styles.RecipientInfoBar}>
        <div className={styles.Name}>To. {name}</div>
        <div className={styles.InfoWrapper}>
          <MessageSummary />
          <div className={styles.RestWrapper}>
            <HotList />
            <button>
              <img src="/src/assets/arrow_down.svg" alt="more emoji" />
            </button>
            <button className={styles.Button}>
              <img
                src="/src/assets/add-emoji.svg"
                alt="add reaction"
                className={styles.ButtonIcon}
              />
              추가
            </button>
            <button className={styles.Button}>
              <img
                src="/src/assets/share.svg"
                alt="share icon"
                className={styles.ButtonIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientInfoBar;

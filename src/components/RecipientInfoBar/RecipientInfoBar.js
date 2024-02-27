/* eslint-disable */
import MessageSummary from "components/MessageSummary/MessageSummary";
import data from "mock/mock.json";
import styles from "./RecipientInfoBar.module.css";
import { useState } from "react";
import TopReactions from "components/TopReactions/TopReactions";

const { name } = data[0];

function RecipientInfoBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.RecipientInfoBarWrapper}>
      <div className={styles.RecipientInfoBar}>
        <div className={styles.Name}>To. {name}</div>
        <div className={styles.InfoWrapper}>
          <MessageSummary />
          <div className={styles.RestWrapper}>
            <TopReactions />
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
            <button className={styles.Button} onClick={handleModalClick}>
              <img
                src="/src/assets/share.svg"
                alt="share icon"
                className={styles.ButtonIcon}
              />
            </button>
            {isModalOpen && (
              <div className={styles.ShareModal}>
                <button className={styles.ShareButton}>카카오톡 공유</button>
                <button className={styles.ShareButton}>URL 공유</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientInfoBar;

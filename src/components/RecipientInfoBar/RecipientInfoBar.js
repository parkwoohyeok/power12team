/* eslint-disable */
import MessageSummary from "components/MessageSummary/MessageSummary";
import data from "mock/mock.json";
import styles from "./RecipientInfoBar.module.css";
import { useState, useRef, useEffect } from "react";
import TopReactions from "components/TopReactions/TopReactions";
import CopyToClipboard from "react-copy-to-clipboard";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

const { name } = data[0];

function RecipientInfoBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();
  const currentUrl = window.location.href;

  const handleModalClick = () => {
    setIsModalOpen(true);
  };
  const handleKakaoClick = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };

  useEffect(() => {
    const closeModal = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [isModalOpen]);

  const Button = isModalOpen
    ? `${styles.Button} ${styles.ModalOpen}`
    : styles.Button;

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
            <button className={Button} onClick={handleModalClick}>
              <img
                src="/src/assets/share.svg"
                alt="share icon"
                className={styles.ButtonIcon}
              />
            </button>
            {isModalOpen && (
              <div className={styles.ShareModal} ref={ref}>
                <button
                  className={styles.ShareButton}
                  onClick={handleKakaoClick}
                >
                  카카오톡 공유
                </button>
                <CopyToClipboard
                  text={currentUrl}
                  onCopy={() => alert("Copied to clipboard!")}
                >
                  <button className={styles.ShareButton}>URL 공유</button>
                </CopyToClipboard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientInfoBar;

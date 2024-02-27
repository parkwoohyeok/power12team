/* eslint-disable */
import MessageSummary from "components/MessageSummary/MessageSummary";
import messageData from "mock/mock.json";
import emojiData from "mock/emoji_mock.json";
import styles from "./RecipientInfoBar.module.css";
import { useState, useRef, useEffect } from "react";
import TopReactions from "components/TopReactions/TopReactions";
import CopyToClipboard from "react-copy-to-clipboard";

const { name } = messageData[0];

function RecipientInfoBar() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEmojiListOpen, setIsEmojiListOpen] = useState(false);

  const shareRef = useRef();
  const emojiListRef = useRef();
  const currentUrl = window.location.href;
  const { results, count } = emojiData;

  const handleKakaoClick = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };

  useEffect(() => {
    const closeModal = (e) => {
      if (
        isShareModalOpen &&
        shareRef.current &&
        !shareRef.current.contains(e.target)
      ) {
        setIsShareModalOpen(false);
      }
      if (
        isEmojiListOpen &&
        emojiListRef.current &&
        !emojiListRef.current.contains(e.target)
      ) {
        setIsEmojiListOpen(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [isShareModalOpen, isEmojiListOpen]);

  const Button = isShareModalOpen
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
            {count - 3 && (
              <>
                <button
                  onClick={() => {
                    setIsEmojiListOpen(true);
                  }}
                >
                  <img src="/src/assets/arrow_down.svg" alt="more emoji" />
                </button>
                {isEmojiListOpen && (
                  <div className={styles.EmojiListModal} ref={emojiListRef}>
                    {results?.map((reaction) => (
                      <div key={reaction.id} className={styles.Reaction}>
                        {reaction.emoji} {reaction.count}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            <button className={styles.Button}>
              <img
                src="/src/assets/add-emoji.svg"
                alt="add reaction"
                className={styles.ButtonIcon}
              />
              추가
            </button>
            <button
              className={Button}
              onClick={() => {
                setIsShareModalOpen(true);
              }}
            >
              <img
                src="/src/assets/share.svg"
                alt="share icon"
                className={styles.ButtonIcon}
              />
            </button>
            {isShareModalOpen && (
              <div className={styles.ShareModal} ref={shareRef}>
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

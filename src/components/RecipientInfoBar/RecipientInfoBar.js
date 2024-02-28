/* eslint-disable */
import styles from "./RecipientInfoBar.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Picker from "@emoji-mart/react";
import emojiListData from "@emoji-mart/data";
import MessageSummary from "components/MessageSummary/MessageSummary";
import TopReactions from "components/TopReactions/TopReactions";
import emojiData from "mock/emoji_mock.json";
import messageData from "mock/mock.json";
import { useState, useRef, useEffect } from "react";
import arrowDown from "assets/arrow_down.png";
import addEmoji from "assets/add-emoji.svg";
import shareIcon from "assets/share.svg";

const { name } = messageData[0];

function RecipientInfoBar() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEmojiListOpen, setIsEmojiListOpen] = useState(false);
  const [isEmojiAddOpen, setIsEmojiAddOpen] = useState(false);

  const shareRef = useRef();
  const emojiListRef = useRef();
  const emojiAddRef = useRef();
  const currentUrl = window.location.href;
  const { results, count } = emojiData;
  /**
   * 카카오톡 공유하기 실행 함수
   */
  const handleKakaoClick = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: currentUrl,
    });
  };
  /**
   * 모달 외부 클릭 시 모달 창 닫힘
   */
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
      if (
        isEmojiAddOpen &&
        emojiAddRef.current &&
        !emojiAddRef.current.contains(e.target)
      ) {
        setIsEmojiAddOpen(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [isShareModalOpen, isEmojiListOpen, isEmojiAddOpen]);
  /**
   * 모달 열림 여부에 따른 버튼 스타일 조정
   */
  const ShareButton = isShareModalOpen
    ? `${styles.Button} ${styles.ModalOpen}`
    : styles.Button;
  const EmojiButton = isEmojiAddOpen
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
                  className={styles.MoreEmojiButton}
                >
                  <img src={arrowDown} alt="more emoji" />
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
            <button
              className={EmojiButton}
              onClick={() => setIsEmojiAddOpen(true)}
            >
              <img
                src={addEmoji}
                alt="add reaction"
                className={styles.ButtonIcon}
              />
              추가
            </button>
            {isEmojiAddOpen && (
              <div className={styles.EmojiPicker} ref={emojiAddRef}>
                <Picker
                  data={emojiListData}
                  onEmojiSelect={(e) => {
                    alert(e.native);
                    setIsEmojiAddOpen(false);
                  }}
                />
              </div>
            )}
            <button
              className={ShareButton}
              onClick={() => {
                setIsShareModalOpen(true);
              }}
            >
              <img
                src={shareIcon}
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

/* eslint-disable */
import styles from "./RecipientInfoBar.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Picker from "@emoji-mart/react";
import emojiListData from "@emoji-mart/data";
import MessageSummary from "components/MessageSummary/MessageSummary";
import TopReactions from "components/TopReactions/TopReactions";
import messageData from "mock/mock.json";
import { useState, useRef, useEffect } from "react";
import arrowDown from "assets/arrow_down.png";
import addEmoji from "assets/add-emoji.svg";
import shareIcon from "assets/share.svg";
import { postEmoji, getEmoji } from "components/Api/EmojiApi";

const { name } = messageData[0];

function RecipientInfoBar() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEmojiListOpen, setIsEmojiListOpen] = useState(false);
  const [isEmojiAddOpen, setIsEmojiAddOpen] = useState(false);
  const [emojiData, setEmojiData] = useState({});

  const shareRef = useRef();
  const emojiListRef = useRef();
  const emojiAddRef = useRef();
  const currentUrl = window.location.href;
  const { results, count } = emojiData;
  /**
   * 이모지 입력 시 post 함수
   * @param {string} 입력 이모지
   */
  const emojiPost = async (emoji) => {
    try {
      const emojiData = { emoji: `${emoji}`, type: "increase" };
      const result = await postEmoji(emojiData);
      if (result) alert(`${emoji} 전송 성공!`);
    } catch (error) {
      console.error("이모지 전송 실패:", error.message);
      throw new error();
    }
  };

  const emojiGet = async () => {
    try {
      const response = await getEmoji();
      setEmojiData(response);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    emojiGet();
  }, []);

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

  const handleEmojiClick = async (e) => {
    setIsEmojiAddOpen(false);
    await emojiPost(e.native);
    await emojiGet();
  };
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
                <Picker data={emojiListData} onEmojiSelect={handleEmojiClick} />
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

import InputPost from "./InputPost/InputPost";
import styles from "./MessageTo.module.css";
import MessageToToggleButton from "./MessageToToggleButton/MessageToToggleButton";

const MessageTo = () => (
  <div className={styles.PostPageBody}>
    <InputPost />
    <div className={styles.Center}>
      <div className={styles.ChooseText}>
        <div className={styles.ChooseView}>배경화면을 선택해 주세요.</div>
        <div className={styles.ChooseColorImage}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </div>
      </div>
      <MessageToToggleButton />
    </div>
    <div className={styles.ButtonSpace}>
      <button className={styles.CreateButton}>생성하기</button>
    </div>
  </div>
);

export default MessageTo;

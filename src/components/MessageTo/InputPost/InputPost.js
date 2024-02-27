import styles from "./InputPost.module.css";

const InputPost = () => (
  <div className={styles.InputPost}>
    <span className={styles.InputPostText}>To.</span>
    <input placeholder="받는 사람 이름을 입력해 주세요"></input>
  </div>
);

export default InputPost;

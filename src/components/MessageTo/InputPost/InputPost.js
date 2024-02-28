import styles from "./InputPost.module.css";

const InputPost = ({ name, error, onChange, handleError }) => (
  <div className={styles.InputPost}>
    <span className={styles.InputPostText}>To.</span>
    <input
      className={`${styles.InputBox} ${error ? styles.InputError : ""}`}
      onChange={onChange}
      value={name}
      onBlur={handleError}
      placeholder="받는 사람 이름을 입력해 주세요"
    ></input>
    {error && (
      <div className={styles.InputErrorMessage}>값을 입력해 주세요.</div>
    )}
  </div>
);

export default InputPost;

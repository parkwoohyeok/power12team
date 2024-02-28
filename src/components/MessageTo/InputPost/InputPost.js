import { useState } from "react";

import styles from "./InputPost.module.css";

const InputPost = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handleError = () => {
    if (!name) {
      setError(true);
    }
  };

  return (
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
};

export default InputPost;

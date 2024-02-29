/* eslint-disable */

import styles from "components/Nav/Nav.module.css";
import logo from "assets/logo.png";

const Nav = () => {
  return (
    <div className={styles.Container}>
      <button className={styles.LogoBtn}>
        <img src={logo} alt="네브바 로고" />
      </button>
      <button className={styles.GoToPostPage}>
        <span>롤링 페이퍼 만들기</span>
      </button>
    </div>
  );
};

export default Nav;

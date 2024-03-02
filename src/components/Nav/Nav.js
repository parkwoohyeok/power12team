/* eslint-disable */

import styles from "components/Nav/Nav.module.css";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Container}>
        <Link to="/">
          <button className={styles.LogoBtn}>
            <img src={logo} alt="네브바 로고" />
          </button>
        </Link>
        <button className={styles.GoToPostPage}>
          <span>롤링 페이퍼 만들기</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
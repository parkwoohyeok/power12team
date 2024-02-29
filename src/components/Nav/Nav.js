/* eslint-disable */

import styles from "components/Nav/Nav.module.css";
import logo from "assets/logo.png";
import { useEffect, useState } from "react";
import useAsync from "hooks/useAsync";
import useGetRecipients from "components/Api/useGetRecipients";

const Nav = () => {
  const [recipientData, setrecipientData] = useState({});
  const [getRecipientPending, getRecipientError, getRecipientsAsync] =
    useAsync(useGetRecipients);

  const recipientGet = async () => {
    const response = await getRecipientsAsync();
    setrecipientData(response.data);
  };

  useEffect(() => {
    recipientGet();
  }, []);

  console.log(recipientData);

  return (
    <div className={styles.NavBar}>
      <div className={styles.Container}>
        <button className={styles.LogoBtn}>
          <img src={logo} alt="네브바 로고" />
        </button>
        <button className={styles.GoToPostPage}>
          <span>롤링 페이퍼 만들기</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;

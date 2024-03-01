/* eslint-disable */

import HotList from "components/HotList/HotList";
import Nav from "components/Nav/Nav";
import RecentList from "components/RecentList/RecentList";
import styles from "pages/ListPage/ListPage.module.css";

const ListPage = () => {
  return (
    <>
      <Nav />
      <div className={styles.Wrapper}>
        <div className={styles.CardList}>
          <div>
            <HotList />
          </div>
          <div>
            <RecentList />
          </div>
        </div>
        <button className={styles.LinkBtn}>
          <h2>나도 만들어보기</h2>
        </button>
      </div>
    </>
  );
};

export default ListPage;

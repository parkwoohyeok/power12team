/* eslint-disable */

import HotList from "components/HotList/HotList";
import RecentList from "components/RecentList/RecentList";
import styles from "pages/ListPage/ListPage.module.css";

const ListPage = () => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <HotList />
      </div>
      <div>
        <RecentList />
      </div>
      <div>
        <button className={styles.LinkBtn}>나도 만들어보기</button>
      </div>
    </div>
  );
};

export default ListPage;

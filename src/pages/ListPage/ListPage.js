/* eslint-disable */

import useGetRecipients from "components/Api/useGetRecipients";
import HotList from "components/HotList/HotList";
import Nav from "components/Nav/Nav";
import RecentList from "components/RecentList/RecentList";
import styles from "pages/ListPage/ListPage.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const { hotData, recentData, fetchHotData, fetchRecentData, hasNextPage } =
    useGetRecipients();

  useEffect(() => {
    fetchHotData(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.Wrapper}>
        <div className={styles.CardList}>
          <div>
            <HotList
              recipientData={hotData}
              hasNextPage={hasNextPage}
              fetchData={fetchHotData}
            />
          </div>
          <div>
            <RecentList
              data={hotData}
              hasNextPage={hasNextPage}
              fetchData={fetchRecentData}
            />
          </div>
        </div>
        <div className={styles.LinkDiv}>
          <Link to="/post">
            <button className={styles.LinkBtn}>
              <h2>나도 만들어보기</h2>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ListPage;

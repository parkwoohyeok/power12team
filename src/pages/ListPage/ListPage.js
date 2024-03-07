/* eslint-disable */

import useGetRecipients from "components/Api/useGetRecipients";
import HotList from "components/HotList/HotList";
import Nav from "components/Nav/Nav";
import RecentList from "components/RecentList/RecentList";
import styles from "pages/ListPage/ListPage.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const {
    isHotLoading,
    isRecentLoading,
    hotData,
    recentData,
    fetchHotData,
    fetchRecentData,
    hasNextHotPage,
    hasNextRecentPage,
  } = useGetRecipients();

  useEffect(() => {
    fetchHotData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    fetchRecentData();
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.Wrapper}>
        <div className={styles.CardList}>
          <div>
            <HotList
              recipientData={hotData}
              hasNextPage={hasNextHotPage}
              fetchData={fetchHotData}
              isLoading={isHotLoading}
            />
          </div>
          <div>
            <RecentList
              data={recentData}
              hasNextPage={hasNextRecentPage}
              fetchData={fetchRecentData}
              isLoading={isRecentLoading}
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

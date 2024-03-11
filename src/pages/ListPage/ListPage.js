import fetchGetRecipients from "components/api/fetchGetRecipients";
import HotList from "components/List/HotList/HotList";
import Nav from "components/common/Nav/Nav";
import RecentList from "components/List/RecentList/RecentList";
import styles from "pages/ListPage/ListPage.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "components/List/Button/Button";

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
  } = fetchGetRecipients();

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
            <Button
              size={!window.innerWidth <= 949 ? "Medium" : "Large"}
              type="submit"
              children={"나도 만들어보기"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ListPage;

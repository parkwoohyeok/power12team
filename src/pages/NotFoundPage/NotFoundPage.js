import { Link } from "react-router-dom";

import Button from "../../components/common/Button/Button";
import Layout from "../../components/common/Layout/Layout";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.NotFoundPage}>
        <div className={styles.Content}>
          <div className={styles.Title}>
            <p className={styles.ErrorCode}>요청 페이지를</p>
            <p className={styles.ErrorText}>찾을 수 없습니다</p>
          </div>
          <div className={styles.Text}>이용에 불편을 드려 죄송합니다</div>
          <Link to="/" className={styles.LinkTo}>
            <Button
              size="Medium"
              type="submit"
              children={"메인 페이지로 돌아가기"}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

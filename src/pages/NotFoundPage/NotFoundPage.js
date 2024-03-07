import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.NotFoundPage}>
        <div className={styles.Content}>
          <div className={styles.Title}>
            <p className={styles.ErrorCode}>요청 페이지를</p>
            <p className={styles.ErrorText}>찾을 수 없습니다🫥</p>
          </div>
          <div className={styles.Text}>이용에 불편을 드려 죄송합니다😥</div>
          <Link to="/" className={styles.LinkTo}>
            <div className={styles.LookButton}>메인 화면으로 돌아가기</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

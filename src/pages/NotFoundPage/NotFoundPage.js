import { Link } from "react-router-dom";

import Layout from "../../components/common/Layout/Layout";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.NotFoungPage}>
        <div className={styles.Content}>
          <div className={styles.Title}>
            <p className={styles.ErrorCode}>404! 🫥</p>
            <p className={styles.ErrorText}>없는 페이지에요!</p>
          </div>
          <div className={styles.Text}>
            죄송합니다... 해당 페이지를 찾을 수 없습니다😥
          </div>
          <Link to="/" className={styles.LinkTo}>
            <div className={styles.LookButton}>메인 화면으로 돌아가기</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

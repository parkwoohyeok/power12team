/* eslint-disable */
import styles from "./LandingPage.module.css";
import Nav from "components/Nav/Nav";
import landingImage01 from "assets/landingImage_01.svg";
import landingImage02 from "assets/landingImage_02.png";

const Landing = () => {
  return (
    <>
      <Nav />
      <div className={styles.Layout}>
        <div className={styles.MainImage}>
          <div className={styles.Description}>
            <div className={styles.Point}>Point 01</div>
            <div className={styles.TextBig}>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </div>
            <div className={styles.TextSmall}>
              로그인 없이 자유롭게 만들어요
            </div>
          </div>
          <img src={landingImage01} className={styles.ImageSource} />
        </div>
        <div className={styles.MainImage}>
          <div className={styles.Description}>
            <div className={styles.Point}>Point 02</div>
            <div className={styles.TextBig}>
              서로에게 이모지로 감정을 표현해보세요
            </div>
            <div className={styles.TextSmall}>
              로그인 없이 자유롭게 만들어요
            </div>
          </div>
          <img src={landingImage02} className={styles.ImageSource} />
        </div>
        <div className={styles.LookButton}>구경해보기</div>
      </div>
    </>
  );
};

export default Landing;

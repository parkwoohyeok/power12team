import "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>없는 페이지에요!</h1>
      <h2>죄송합니다. 해당 페이지를 찾을 수 없습니다.</h2>
      <Link to="/">메인 화면으로 돌아가기</Link>
    </>
  );
};

export default NotFoundPage;

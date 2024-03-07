/* eslint-disable */
import styles from "./Layout.module.css";
import Nav from "components/common/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.Layout}>{children}</div>
    </>
  );
};

export default Layout;
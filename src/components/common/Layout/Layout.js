import Nav from "components/common/Nav/Nav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.Layout}>{children}</div>
    </>
  );
};

export default Layout;

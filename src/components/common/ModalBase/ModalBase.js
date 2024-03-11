import styles from "./ModalBase.module.css";

const ModalBase = ({ children, onClick }) => {
  return (
    <div className={styles.ModalBackground} onClick={onClick}>
      <div className={styles.ModalBox} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;

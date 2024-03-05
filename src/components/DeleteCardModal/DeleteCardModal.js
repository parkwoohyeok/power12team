import ModalBase from "../common/ModalBase/ModalBase";
import PurpleButton from "../common/PurpleButton/PurpleButton";

import styles from "./DeleteCardModal.module.css";

const DeleteCardModal = ({ onClose, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ModalBase onClick={onClose}>
      <div className={styles.AlignDeleteModal}>
        <div>삭제하시겠습니까?</div>
        <div className={styles.AlignButtons}>
          <div onClick={handleDelete}>
            <PurpleButton>확인</PurpleButton>
          </div>
          <div onClick={onClose}>
            <PurpleButton>취소</PurpleButton>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default DeleteCardModal;

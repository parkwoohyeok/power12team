import Button from "../../common/Button/Button";
import ModalBase from "../../common/ModalBase/ModalBase";

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
            <Button size="Modal">확인</Button>
          </div>
          <div onClick={onClose}>
            <Button size="Modal">취소</Button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default DeleteCardModal;

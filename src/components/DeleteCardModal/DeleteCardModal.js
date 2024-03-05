import ModalBase from "../ModalBase/ModalBase";

const DeleteCardModal = ({ onClose, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ModalBase onClick={onClose}>
      <div>삭제하시겠습니까?</div>
      <button onClick={handleDelete}>확인</button>
      <button>취소</button>
    </ModalBase>
  );
};

export default DeleteCardModal;

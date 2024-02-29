import styles from "./DeleteIcon.module.css";

const DeleteIcon = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return <button className={styles.DeleteIcon} onClick={handleDelete}></button>;
};

export default DeleteIcon;

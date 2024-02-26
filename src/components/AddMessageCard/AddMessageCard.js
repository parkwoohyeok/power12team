import plusButton from "../../assets/plus.svg";
import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";

import styles from "./AddMessageCard.module.css";

const AddMessageCard = () => {
  return (
    <MessageCardContainer>
      <div className={styles.AlignButton}>
        <img className={styles.PlusButton} src={plusButton} />
      </div>
    </MessageCardContainer>
  );
};

export default AddMessageCard;

import styles from "./AddMessageCard.module.css";

import { Link } from "react-router-dom";
import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";

import plusButton from "../../../../assets/plus.svg";

const AddMessageCard = () => {
  return (
    <MessageCardContainer>
      <Link to="message">
        <div className={styles.AlignButton}>
          <img className={styles.PlusButton} src={plusButton} />
        </div>
      </Link>
    </MessageCardContainer>
  );
};

export default AddMessageCard;

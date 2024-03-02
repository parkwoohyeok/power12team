import { Link } from "react-router-dom";

import plusButton from "../../assets/plus.svg";
import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";

import styles from "./AddMessageCard.module.css";

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

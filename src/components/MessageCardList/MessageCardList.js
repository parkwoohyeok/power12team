import mockData from "../../assets/recipientMessagesMock.json";
import AddMessageCard from "../AddMessageCard/AddMessageCard";
import MessageCard from "../MessageCard/MessageCard";

import styles from "./MessageCardList.module.css";

const MessageCardList = () => {
  const mock = mockData.results;

  return (
    <div className={styles.CardListBackground}>
      <div className={styles.CardListContainer}>
        <AddMessageCard />
        {mock.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default MessageCardList;

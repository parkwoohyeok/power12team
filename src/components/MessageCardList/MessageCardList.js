import { useEffect, useRef, useState } from "react";

import mockData from "../../assets/recipientMessagesMock.json";
import AddMessageCard from "../AddMessageCard/AddMessageCard";
import MessageCard from "../MessageCard/MessageCard";

import styles from "./MessageCardList.module.css";

const LIMIT = 6;
const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
};

const MessageCardList = () => {
  const mock = mockData.results;
  const [offset, setOffset] = useState(11);
  const [list, setList] = useState(mock.slice(0, offset));
  const [isEditing, setIsEditing] = useState(false);

  const SENTINEL = useRef();

  const handleClickOnEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setList((prevList) => [
            ...prevList,
            ...mock.slice(offset, offset + LIMIT),
          ]);
          if (offset < mock.length) {
            setOffset((prevOffset) => prevOffset + LIMIT);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, OPTIONS);

    observer.observe(SENTINEL.current);

    return () => {
      observer.unobserve(SENTINEL.current);
    };
  }, [offset]);

  return (
    <div className={styles.CardListBackground}>
      <div className={styles.CardListPadding}>
        <button
          className={styles.CardListEditButton}
          onClick={handleClickOnEdit}
        >
          편집하기
        </button>
      </div>
      <div className={styles.CardListContainer}>
        {isEditing || <AddMessageCard />}
        {list.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            isEditing={isEditing}
          />
        ))}
      </div>
      <div ref={SENTINEL} className={styles.LoadMore}></div>
    </div>
  );
};

export default MessageCardList;

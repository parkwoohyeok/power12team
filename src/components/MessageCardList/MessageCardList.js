import { useEffect, useRef, useState } from "react";

import mockData from "../../assets/recipientMessagesMock.json";
import AddMessageCard from "../AddMessageCard/AddMessageCard";
import { getMessages } from "../Api/RecipientApi";
import MessageCard from "../MessageCard/MessageCard";

import styles from "./MessageCardList.module.css";

const LIMIT = 6;
const TEAM = "4-12";
const ID = 2697;

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
};

const MessageCardList = () => {
  const mock = mockData.results;
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getData = async (team, id, limit, initOffset) => {
      try {
        const MESSAGES = await getMessages(team, id, limit, initOffset);
        console.log(MESSAGES);
        setList(MESSAGES);
        setOffset(offset + LIMIT);
      } catch (error) {
        alert(error);
      }
    };

    getData(TEAM, ID, LIMIT, offset);
  }, []);

  const SENTINEL = useRef();

  const handleClickOnEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const newList = list.filter((message) => message.id !== id);
    setList(newList);
  };

  const handleClickOnSave = () => {
    setIsEditing(false);
  };

  // useEffect(() => {
  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setList((prevList) => [
  //           ...prevList,
  //           ...mock.slice(offset, offset + LIMIT),
  //         ]);
  //         if (offset < mock.length) {
  //           setOffset((prevOffset) => prevOffset + LIMIT);
  //         }
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, OPTIONS);

  //   observer.observe(SENTINEL.current);

  //   return () => {
  //     observer.unobserve(SENTINEL.current);
  //   };
  // }, [offset]);

  return (
    <div className={styles.CardListBackground}>
      <div className={styles.CardListPadding}>
        {!isEditing && (
          <button
            className={styles.CardListEditButton}
            onClick={handleClickOnEdit}
          >
            편집하기
          </button>
        )}
        {isEditing && (
          <button
            className={styles.CardListEditButton}
            onClick={handleClickOnSave}
          >
            저장하기
          </button>
        )}
      </div>
      <div className={styles.CardListContainer}>
        {isEditing || <AddMessageCard />}
        {list.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            isEditing={isEditing}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div ref={SENTINEL} className={styles.LoadMore}></div>
    </div>
  );
};

export default MessageCardList;

import { useEffect, useRef, useState } from "react";

import AddMessageCard from "../AddMessageCard/AddMessageCard";
import { getMessages } from "../Api/RecipientApi";
import MessageCard from "../MessageCard/MessageCard";

import styles from "./MessageCardList.module.css";

const LIMIT = 6;
const id = 2697;

const IO_OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
};

const MessageCardList = () => {
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const getData = async (options) => {
    try {
      const RESPONSE = await getMessages(options);
      if (options.offset === 0) {
        setList(RESPONSE.results);
      } else {
        setList((prevList) => [...prevList, ...RESPONSE.results]);
      }

      setHasNext(RESPONSE.next);
      setOffset(offset + RESPONSE.results.length);
    } catch (error) {
      console.error(error);
    }
  };

  const SENTINEL = useRef();

  const handleClickOnEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = (messageId) => {
    const newList = list.filter((message) => message.id !== messageId);
    setList(newList);
  };

  const handleClickOnSave = () => {
    setIsEditing(false);
  };

  // 처음 렌더링 시 받아올 데이터
  useEffect(() => {
    getData({ id, offset, limit: LIMIT });
  }, []);

  // 무한 스크롤
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNext) {
          getData({ id, offset, limit: LIMIT });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, IO_OPTIONS);

    observer.observe(SENTINEL.current);

    return () => {
      observer.unobserve(SENTINEL.current);
    };
  }, [offset]);

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

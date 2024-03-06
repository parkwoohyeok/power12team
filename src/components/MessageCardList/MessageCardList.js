/* eslint-disable */

import { useEffect, useRef, useState } from "react";

import useAsync from "../../hooks/useAsync";
import AddMessageCard from "./AddMessageCard/AddMessageCard";
import { deleteMessage, fetchMessages } from "../Api/recipientApis";
import MessageCard from "./MessageCard/MessageCard";
import styles from "./MessageCardList.module.css";
import MessageCardSkeleton from "./MessageCardSkeleton/MessageCardSkeleton";
import PurpleButton from "components/common/PurpleButton/PurpleButton";

const LIMIT = 6;

const IO_OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.9,
};

const MessageCardList = ({
  recipientId,
  backgroundImageURL,
  backgroundColor,
}) => {
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const SENTINEL = useRef();

  const [fetchMessagesPending, fetchMessagesError, fetchMessagesAsync] =
    useAsync(fetchMessages);

  const loadMessages = async (options) => {
    const RESPONSE = await fetchMessagesAsync(options);

    if (options.offset === 0) {
      setList(RESPONSE?.results);
    } else {
      setList((prevList) => [...prevList, ...RESPONSE?.results]);
    }

    const NEXT = RESPONSE?.next;
    if (NEXT) {
      setOffset(NEXT.split("offset=")[1]);
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  };
  /* eslint-disable */
  const deleteData = async (messageId) => {
    try {
      const RESULT = await deleteMessage(messageId);
      return RESULT;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOnEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async (messageId) => {
    const result = await deleteData(messageId);
    if (result === 204) {
      const newList = list.filter((message) => message.id !== messageId);
      setList(newList);
    }
  };

  const handleClickOnSave = () => {
    setIsEditing(false);
  };

  // 처음 렌더링 시 받아올 데이터
  useEffect(() => {
    loadMessages({ recipientId, offset, limit: 5 });
  }, []);

  if (fetchMessagesError) console.log(fetchMessagesError);

  // 무한 스크롤
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNext) {
          loadMessages({ recipientId, offset, limit: LIMIT });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, IO_OPTIONS);

    observer.observe(SENTINEL.current);

    return () => {
      /* 페이지 전환 시 element 사라짐 대응 조건식 */
      if (SENTINEL.current) {
        observer.unobserve(SENTINEL.current);
      }
    };
  }, [offset, hasNext]);

  return (
    <>
      <div className={styles.CardListPadding}>
        {isEditing ? (
          <div
            className={styles.CardListEditButton}
            onClick={handleClickOnSave}
          >
            <PurpleButton addClass={styles.CardListEditButtonResponsive}>
              저장하기
            </PurpleButton>
          </div>
        ) : (
          <div
            className={styles.CardListEditButton}
            onClick={handleClickOnEdit}
          >
            <PurpleButton addClass={styles.CardListEditButtonResponsive}>
              편집하기
            </PurpleButton>
          </div>
        )}
      </div>
      <div className={styles.CardListContainer}>
        {isEditing || <AddMessageCard />}
        {list?.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            isEditing={isEditing}
            onDelete={handleDelete}
          />
        ))}
        {fetchMessagesPending &&
          Array(6)
            .fill(0)
            .map((el, idx) => <MessageCardSkeleton key={idx} />)}
      </div>
      <div
        ref={SENTINEL}
        className={`${styles.LoadMore} ${styles[backgroundImageURL || backgroundColor]}`}
      ></div>
    </>
  );
};

export default MessageCardList;

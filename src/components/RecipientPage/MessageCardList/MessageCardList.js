import styles from "./MessageCardList.module.css";

import { useEffect, useRef, useState } from "react";
import { deleteMessage, fetchMessages } from "../../api/recipientApis";
import AddMessageCard from "./AddMessageCard/AddMessageCard";
import MessageCard from "./MessageCard/MessageCard";
import MessageCardSkeleton from "./MessageCardSkeleton/MessageCardSkeleton";
import Button from "components/common/Button/Button";

import useAsync from "../../../hooks/useAsync";

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
  const [deleteMessagePending, deleteMessageError, deleteMessageAsync] =
    useAsync(deleteMessage);

  if (fetchMessagesError) {
    alert("메세지를 불러오는데 실패했습니다.", fetchMessagesError);
  }

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

  const handleClickOnEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async (messageId) => {
    const result = await deleteMessageAsync(messageId);
    if (result === 204) {
      const newList = list.filter((message) => message.id !== messageId);
      setList(newList);
    }
  };

  useEffect(() => {
    if (deleteMessageError) {
      alert(
        "메세지를 삭제하지 못했습니다. Error:",
        deleteMessageError.response.status,
      );
    }
  }, [deleteMessageError]);

  const handleClickOnSave = () => {
    setIsEditing(false);
  };

  // 처음 렌더링 시 받아올 데이터
  useEffect(() => {
    loadMessages({ recipientId, offset, limit: 5 });
  }, []);

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
            <Button size="Small">저장하기</Button>
          </div>
        ) : (
          <div
            className={styles.CardListEditButton}
            onClick={handleClickOnEdit}
          >
            <Button size="Small">편집하기</Button>
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

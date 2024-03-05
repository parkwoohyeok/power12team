import { useEffect, useState } from "react";

import { getRecipient } from "../../components/Api/RecipientApi";
import CardListBackground from "../../components/MessageCardList/CardListBackground/CardListBackground";
import MessageCardList from "../../components/MessageCardList/MessageCardList";
import Nav from "../../components/Nav/Nav";
import RecipientInfoBar from "../../components/RecipientInfoBar/RecipientInfoBar";
import useAsync from "../../hooks/useAsync";

import styles from "./RecipientPage.module.css";

const RecipientPage = () => {
  const [recipient, setRecipient] = useState({});

  const recipientPath = window.location.pathname.split("/post")[1];
  const recipientIdMatch = recipientPath.match(/\d+/); // 숫자 부분만 매칭
  const recipientId = recipientIdMatch ? parseInt(recipientIdMatch[0], 10) : 0;

  const { backgroundColor, backgroundImageURL } = recipient;

  const [getRecipientPending, getRecipientError, getRecipientAsync] =
    useAsync(getRecipient);

  const loadRecipient = async (id) => {
    const RESPONSE = await getRecipientAsync(id);
    setRecipient(RESPONSE);
  };

  useEffect(() => {
    loadRecipient(recipientId);
  }, []);

  return (
    <>
      <div className={styles.FixPosition}>
        <Nav />
        <RecipientInfoBar recipientData={recipient} />
      </div>
      <CardListBackground
        backgroundType={backgroundImageURL || backgroundColor}
      >
        <MessageCardList
          recipient={recipient}
          recipientId={recipientId}
          backgroundColor={backgroundColor}
          backgroundImageURL={backgroundImageURL}
        />
      </CardListBackground>
    </>
  );
};

export default RecipientPage;

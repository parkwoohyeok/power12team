import styles from "./MessageCardContent.module.css";

import { useEffect, useRef } from "react";

const MessageCardContent = ({ message }) => {
  const CONTENT_ELEMENT = useRef();
  const FONT = message.font.replaceAll(" ", "");

  useEffect(() => {
    const CONTENT = message.content;
    CONTENT_ELEMENT.current.innerHTML = CONTENT;
  }, []);

  return (
    <div
      ref={CONTENT_ELEMENT}
      className={`${styles.CardContent} ${styles[FONT]}`}
      // dangerouslySetInnerHTML={{ __html: message.content }}
    ></div>
  );
};

export default MessageCardContent;

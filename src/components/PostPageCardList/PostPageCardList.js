import mockData from "../../assets/recipientMessagesMock.json";
import PostPageCard from "../PostPageCard/PostPageCard";

import styles from "./PostPageCardList.module.css";

const PostPageCardList = () => {
  const mock = mockData.results;

  return (
    <div className={styles.CardListBackground}>
      <div className={styles.CardListContainer}>
        {mock.map((message) => (
          <PostPageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default PostPageCardList;

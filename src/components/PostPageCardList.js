import mockData from "../assets/recipientMessagesMock.json";

import PostPageCard from "./PostPageCard";

const PostPageCardList = () => {
  const mock = mockData.results;

  return (
    <>
      {mock.map((message) => (
        <PostPageCard key={message.id} message={message} />
      ))}
    </>
  );
};

export default PostPageCardList;

import MessageCardList from "../components/MessageCardList/MessageCardList";
import Nav from "../components/Nav/Nav";
import RecipientInfoBar from "../components/RecipientInfoBar/RecipientInfoBar";

const RecipientPage = () => {
  return (
    <>
      <Nav />
      <RecipientInfoBar />
      <MessageCardList />
    </>
  );
};

export default RecipientPage;

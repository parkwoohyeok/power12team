import mockData from "../assets/mock.json";

const PostPageCard = () => {
  return (
    <div className="CardContainer">
      <div className="RecipientInfo">
        <div className="RecipientImage"></div>
        <div className="CardAuthor">{mockData.profileImageURL}</div>
        <div className="Relationship">{mockData.relationship}</div>
      </div>
      <div className="CardContent">{mockData.content}</div>
      <p className="CreatedAt">{mockData.createdAt}</p>
    </div>
  );
};

export default PostPageCard;

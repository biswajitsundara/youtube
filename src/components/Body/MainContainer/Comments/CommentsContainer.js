import Comments from "./Comments";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Biswajit Sundara",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      name: "Biswajit Sundara",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      name: "Biswajit Sundara",
      text: "Lorem ipsum",
      replies: [],
    },
  ];
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>

      <CommentsList commentData={commentsData} />
    </div>
  );
};

export default CommentsContainer;

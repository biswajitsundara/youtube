import Comments from "./Comments";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      id: "1",
      name: "Biswajit Sundara",
      text: "Lorem ipsum",
      replies: [
        {
          id: "1",
          name: "Priyanka Das",
          text: "Lorem ipsum",
          replies: [
            {
              id: "1",
              name: "Kareena Kapoor",
              text: "Lorem ipsum",
              replies: [],
            },
          ],
        },
        { id: "1", name: "Deepika Das", text: "Lorem ipsum", replies: [] },
      ],
    },
    {
      id: "2",
      name: "Biswajit Sundara",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      id: "3",
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

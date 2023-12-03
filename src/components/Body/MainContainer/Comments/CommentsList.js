import Comments from "./Comments";

const CommentsList = ({commentData}) => {
    console.log(commentData);
    return (
        <div>
          {commentData.map((comment) => (
            <Comments key={comment.id} data={comment} />
          ))}
        </div>
      );
};

export default CommentsList;

import Comments from "./Comments";

const CommentsList = ({commentData}) => {
    return (
        <div>
          {commentData.map((comment) => (
            <div>
               <Comments key={comment.id} data={comment} />
               <div className="pl-5 ml-10 border border-l-black">
                  <CommentsList  commentData={comment.replies}/>
               </div>
            </div>
            
          ))}
        </div>
      );
};

export default CommentsList;

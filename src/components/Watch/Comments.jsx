import React from "react";
import Comment from "./comments/Comment";
import CommentList from "./comments/CommentList";

const commentsData = [
  {
    name: "Biswajit",
    text: "Lorem ipsum lum",
    replies: [
      {
        name: "Biswajit",
        text: "Lorem ipsum lum",
        replies: [
          {
            name: "Biswajit",
            text: "Lorem ipsum lum",
            replies: [],
          },
        ],
      },
      {
        name: "Biswajit",
        text: "Lorem ipsum lum",
        replies: [],
      },
    ],
  },
  {
    name: "Biswajit",
    text: "Lorem ipsum lum",
    replies: [],
  },
  {
    name: "Biswajit",
    text: "Lorem ipsum lum",
    replies: [],
  },
];
function CommentsContainer() {
  return (
    <div className="px-20">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentList comments={commentsData}/>
    </div>
  );
}

export default CommentsContainer;

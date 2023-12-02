const Comments = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.text}</p>
    </div>
  );
};

export default Comments;

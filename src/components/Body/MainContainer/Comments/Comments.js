const Comments = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex flex-row shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;

const Button = ({name}) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 mt-4 rounded-lg bg-gray-200 text-sm min-w-[12px]">{name}</button>
    </div>
  );
};

export default Button;

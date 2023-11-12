import Button from "./Buttons/Button";

const ButtonsList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Cooking",
    "React",
    "Diwali",
    "Gameshows",
    "Watched",
    "New to you",
  ];
  return (
    <div className="flex">
      {buttonList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonsList;

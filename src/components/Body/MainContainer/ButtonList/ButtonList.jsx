import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttonNames = [
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
    <div className="flex pl-5">
      {buttonNames.map((buttonName)=>(
         <Button key={buttonName} name={buttonName}/>
      ))}
    </div>
  );
}

export default ButtonList;

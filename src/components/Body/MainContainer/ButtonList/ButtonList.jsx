import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttonNames = ["All", "Games", "Songs", "Cricket", "News"];
  return (
    <div className="flex">
      {buttonNames.map((buttonName)=>(
         <Button key={buttonName} name={buttonName}/>
      ))}
    </div>
  );
}

export default ButtonList;

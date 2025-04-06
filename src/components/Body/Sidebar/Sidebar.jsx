import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 col-span-1 h-screen fixed">
    <MenuItems />
  </div>
  );
}

export default Sidebar;

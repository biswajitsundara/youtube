import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) {
    return null;

  }

  return (
    <div className="p-5 shadow-lg col-span-1">
      <MenuItems />
    </div>
  );
};

export default SideBar;

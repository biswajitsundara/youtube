import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer/MainContainer";
import SideBar from "./SideBar/SideBar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default Body;
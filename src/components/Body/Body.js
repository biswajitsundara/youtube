import MainContainer from "./MainContainer/MainContainer";
import SideBar from "./SideBar/SideBar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
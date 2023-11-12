import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid col-span-11">
      <div className="ml-5 grid-flow-row">
        <ButtonsList />
        <VideoContainer/>
      </div>
    </div>
  );
};

export default MainContainer;

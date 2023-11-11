import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="grid col-span-11">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

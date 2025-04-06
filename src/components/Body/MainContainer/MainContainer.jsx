import React, { useEffect } from "react";
import ButtonList from "./ButtonList/ButtonList";
import VideoContainer from "./VideoContainer/VideoContainer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../Error/ErrorComponent";
import { useDispatch } from "react-redux";
import { openMenu } from "../../../util/appSlice";

function MainContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu()); // Set isMenuOpen = true when MainContainer mounts
  }, [dispatch]);

  return (
    <div className="grid col-span-11 ml-64">
      <div className="ml-5 grid-flow-row">
      <ButtonList />
      <ErrorBoundary fallback={ErrorFallback}>
        <VideoContainer />
      </ErrorBoundary>
      </div>
    </div>
  );
}

export default MainContainer;

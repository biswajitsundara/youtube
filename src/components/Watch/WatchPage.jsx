import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../util/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comments";
import LiveChat from "./LiveChat/LiveChat";

function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className="px-20 py-10 flex w-full">
      <div>
      <iframe
        className="rounded-lg"
        width="866"
        height="487"
        src= {"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="&#39;Chokhat&#39; की Founder के Positive Mindset ने किया Sharks को Impress |Shark Tank India S4| Full Pitch"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="ml-10 w-full">
        <LiveChat />
      </div>
    </div>
    <CommentsContainer />
    </div>
  );
}

export default WatchPage;

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../../util/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../../util/appSlice";

function VideoContainer() {
  const [videos, setVideos] = useState([]);


  
  useEffect(() => {
    getVideos();
    
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data.items);
  };

  if (!videos) {
    return null;
  }

  return (
    <div className="mt-6 ml-5 flex flex-wrap">
      {videos.map((videoItem) => (
        <Link key={videoItem.id} to={"/watch?v=" + videoItem.id}>
          <VideoCard info={videoItem} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;

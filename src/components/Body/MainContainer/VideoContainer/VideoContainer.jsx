import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../../util/constants";
import VideoCard, {AdvideoCard} from "./VideoCard";
import { Link } from "react-router-dom";

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

  if (videos.length <= 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      <AdvideoCard info={videos[0]}/>
      {videos.map((videoItem) => (
        <Link key={videoItem.id} to={"/watch?v=" + videoItem.id}>
          <VideoCard info={videoItem} />
        </Link>
      ))}
    </div>
  );
}



export default VideoContainer;

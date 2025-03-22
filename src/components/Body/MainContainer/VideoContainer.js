import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  if(!videos){
    console.log('videos length is zero')
    return null;
  }

  return (
    <div className="mt-6 ml-5 flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

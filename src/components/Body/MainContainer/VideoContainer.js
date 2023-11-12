import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import VideoCard from "./VideoCard/VideoCard";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos = async() =>{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items);
    }

    return ( <div className="mt-6 ml-5">
        <VideoCard info={videos[0]} />
    </div> );
}
 
export default VideoContainer;
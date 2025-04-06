import React, {useState, useEffect} from "react";
import { CHANNEL_INFO_API,REACT_APP_GOOGLE_API_KEY } from "../../../../util/constants";

function VideoCard({ info }) {


  const [channelLogo, setChannelLogo] = useState([]);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  
    useEffect(() => {
      getChannelInfo();
    }, []);
  
    const getChannelInfo = async () => {
      const response = await fetch(`${CHANNEL_INFO_API}${snippet.channelId}&key=${REACT_APP_GOOGLE_API_KEY}`);
      const data = await response.json();
      //console.log(data.items[0].snippet.thumbnails.default.url);
      setChannelLogo(data.items[0].snippet.thumbnails.default.url);
    };

  const formatViews = (views) => {
    if (views < 1000) {
      return views.toString(); // 0-999 as is
    } else if (views < 1_000_000) {
      return (views / 1000).toFixed(1).replace(/\.0$/, "") + "K"; // Thousands (e.g., 1.2K)
    } else {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"; // Millions (e.g., 2.5M)
    }
  };


  const getTimeAgo = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    
    const diffInSeconds = Math.floor((currentDate - publishedDate) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInSeconds < 60) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;
  
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
  
    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} years ago`;
  };
  
  
  return (
    <div className="p-3 w-96 overflow-hidden">
      <img
        className="w-full h-56 rounded-lg object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      {/* Channel Icon & Title */}
      <div className="media-details flex items-start p-2">
        {/* Circular Image */}
        <img
          src={channelLogo}
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Title - Prevent Overflow */}
        <div className="pl-2 w-[20rem] text-sm font-semibold text-gray-800">
          <div className="line-clamp-2">{title}</div>
          <div className="text-gray-500">{channelTitle}</div>
          <div className="text-gray-500 text-sm">
            {formatViews(statistics.viewCount)} views
            <span className="text-gray-500 text-sm"> &#8226; {getTimeAgo(snippet.publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoCard;

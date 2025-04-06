import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../util/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comments";
import LiveChat from "./LiveChat/LiveChat";
import { CHANNEL_INFO_API, CHANNEL_STATS_API, REACT_APP_GOOGLE_API_KEY, YOUTUBE_VIDEO_DETAILS_API } from "../../util/constants";
import likeIcon from "../../assets/svgs/like.svg";
import dislikeIcon from "../../assets/svgs/dislike.svg";
import shareIcon from "../../assets/svgs/share.svg";
import threedots from "../../assets/svgs/threedots.svg";
import { formatCount } from "../../util/formatData";

function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [details, setDetails] = useState({});
  const [channelInfo, setChannelInfo] = useState({});
  const [subscribersCount, setSubscribersCount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();

    if (details?.channelId) {
      getChannelInfo();
      getSubscribersCount();
    }
  }, [details.channelId]);

  const getVideoDetails = async () => {
    const videoId = searchParams.get("v");
    const response = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
    const data = await response.json();

    setDetails(data.items[0].snippet);
    //setChannelName(data.items[0].snippet.channelTitle);
    //console.log(data);
  };

   const getChannelInfo = async () => {
    const channelId = details.channelId;
        const response = await fetch(`${CHANNEL_INFO_API}${channelId}&key=${REACT_APP_GOOGLE_API_KEY}`);
        const data = await response.json();
        const snippet = data.items[0].snippet;
        console.log(data);

        setChannelInfo({
          channelTitle: snippet.title,
          thumbnail: snippet.thumbnails.default.url
        })
      };

      const getSubscribersCount = async () =>{
        const channelId = details.channelId;
        //const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${REACT_APP_GOOGLE_API_KEY}`);
        const res = await fetch(`${CHANNEL_STATS_API}${channelId}`); 
        const data = await res.json();
        const subscribers = data.items[0].statistics.subscriberCount;
        const subscriberCount = await formatCount(subscribers);
        setSubscribersCount(subscriberCount);
      }

  return (
    <div className="flex flex-col w-full">
      <div className="px-20 py-10 flex w-full">
        <div>
          <iframe
            className="rounded-lg"
            width="866"
            height="487"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title={details.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="text-xl text-gray-800 font-bold mt-2">
            {details.title}
          </p>


          
          <div className="watch-metadata flex justify-between mt-2">

            <div className="brand">
            <div className="channelInfo flex gap-4">
              <img src={channelInfo.thumbnail} alt="" className="h-10 w-10 rounded-full"/>
                <div>
                <p className="font-bold">{channelInfo.channelTitle}</p>
                <p className="text-gray-700 text-sm">{subscribersCount} subscribers</p>
                </div>
              
            </div>
            </div>
            
          <div className="action-buttons flex">
          <div className="joinButton bg-gray-800 text-white text-sm font-medium px-5 w-26 rounded-full flex shadow hover:bg-gray-900 items-center  cursor-pointer mr-10">
                <span>Subscribe</span>
            </div>

            <div className="likeDislikeWrapper flex mr-3">
              <div className="bg-gray-200 text-sm font-medium px-4 w-24 rounded-l-full flex shadow  hover:bg-gray-300 cursor-pointer items-center">
              <img src={likeIcon} alt="" className="mr-3" /><span> 33K</span>
              </div>
              <div className="bg-gray-200 text-sm font-medium px-4 w-16 rounded-r-full flex shadow hover:bg-gray-300 items-center  cursor-pointer">
              <img src={dislikeIcon} alt="" />
              </div>
            </div>

            <div className="shareButton bg-gray-200 text-sm font-medium px-4 w-24 rounded-full flex shadow hover:bg-gray-300 items-center  cursor-pointer mr-3">
                <img src={shareIcon} alt="" />
                <span>Share</span>
            </div>

            <div className="moreActions flex items-center justify-center w-10 h-10 bg-gray-200 text-white text-sm font-medium rounded-full shadow cursor-pointer hover:bg-gray-300 transition-colors duration-200">
              <img src={threedots} alt="" />
            </div>

          </div>
          
           
           
          </div>
        </div>
        <div className="ml-10 w-full">
          {/* <LiveChat /> */}
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;

const VideoCard = ({info}) => {


    if(!info){
        return null;
    }

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return ( <div className="p-2 m-2 w-72 ">
        <img src={thumbnails?.medium?.url} alt="" className="rounded-lg hover:rounded-none cursor-pointer hover:scale-110 hover:transition-all"/>
        <ul>
            <li className="font-bold">{title}</li>
            <li className="text-gray-500">{channelTitle}</li>
            <li className="text-gray-500">{statistics.viewCount} views</li>
        </ul>
    </div> );
}
 
export default VideoCard;
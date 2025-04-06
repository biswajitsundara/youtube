export const REACT_APP_GOOGLE_API_KEY = localStorage.getItem("REACT_APP_GOOGLE_API_KEY");
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const CHANNEL_INFO_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";
export const CHANNEL_STATS_API = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key="+REACT_APP_GOOGLE_API_KEY+"&id=";
export const YOUTUBE_VIDEO_DETAILS_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&key="+REACT_APP_GOOGLE_API_KEY+"&id=";
export const LIVE_CHAT_OFFSET = 10;
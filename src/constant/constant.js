const GOOGLE_API_KEYS = "AIzaSyCsf9ofNLhXcQchkGkvzd2qiSO3ER4f2A4";

export const YOUTUBE_VIDEOS_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
   `${GOOGLE_API_KEYS}`;

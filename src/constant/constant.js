// export const GOOGLE_API_KEYS = "AIzaSyCsf9ofNLhXcQchkGkvzd2qiSO3ER4f2A4";

// export const GOOGLE_API_KEYS = "AIzaSyBiZjUBR3ZgBFEN4r0F_YUazGDL0q4amLs";

export const GOOGLE_API_KEYS = "AIzaSyCHpjtioVwcejl9I3UlCSBKW-zDifItC8Y";

export const YOUTUBE_VIDEOS_API =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=" +
   `${GOOGLE_API_KEYS}`;

export const YOUTUBE_SEARCH_API =
   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

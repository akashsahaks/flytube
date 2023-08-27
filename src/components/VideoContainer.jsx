import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constant/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      getVideos();
   }, []);

   const getVideos = async () => {
      try {
         // fetching youtube data
         const data = await fetch(YOUTUBE_VIDEOS_API);
         const jsonData = await data?.json();
         // console.log(jsonData);
         setVideos(jsonData?.items);
      } catch (error) {
         console.log("VideoContainer.jsx - getVideo : ", error);
      }
   };
   return (
      <>
         <div className="flex flex-wrap justify-between px-4">
            {videos?.map((video) => (
               <Link to={"/watch?v=" + video?.id} key={video?.id}>
                  <VideoCard info={video} />
               </Link>
            ))}
         </div>
      </>
   );
};

export default VideoContainer;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../state/appSlice";

const WatchPage = () => {
   const [searchParams] = useSearchParams();
   // console.log(searchParams.get("v"));
   const dispatch = useDispatch();

   useEffect(() => {
      // by default, always sidebar will be closed in Watchpage
      dispatch(closeMenu());
   });

   return (
      <>
         <div className="px-20 py-6">
            <iframe
               width="966"
               height="543"
               src={"https://www.youtube.com/embed/" + searchParams.get("v")}
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
            ></iframe>
         </div>
      </>
   );
};

export default WatchPage;

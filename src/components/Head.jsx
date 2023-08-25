import React from "react";
import { toggleMenu } from "../state/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
   const dispatch = useDispatch();

   const toggleMenuHandler = () => {
      dispatch(toggleMenu());
   };

   return (
      <>
         <div className="grid grid-flow-col p-5 shadow-lg">
            <div className="flex col-span-1">
               <div>
                  <i
                     className="fa-solid fa-bars fa-2xl cursor-pointer"
                     onClick={() => toggleMenuHandler()}
                  ></i>
               </div>{" "}
               <a href="">
                  <img
                     className="h-8 mx-3 pb-2"
                     src="https://www.seekpng.com/png/full/77-772362_youtube-logo-youtube-logo-png.png"
                     alt="youtube logo"
                  />
               </a>
            </div>
            {/* ----- search bar ----- */}
            <div className="col-span-10 px-10">
               <input
                  className="w-1/3 border border-gray-500 rounded-l-full p-1"
                  type="text"
                  name="search"
               />
               <button className="border border-gray-400 rounded-r-full p-1 px-4">
                  Search
               </button>
            </div>
            <div className="col-span-1">
               <i className="fa-solid fa-user"></i>
            </div>
         </div>
      </>
   );
};

export default Head;

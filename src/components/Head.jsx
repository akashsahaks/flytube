import React, { useEffect, useState } from "react";
import { toggleMenu } from "../state/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API, GOOGLE_API_KEYS } from "../constant/constant";
import { cacheResults } from "../state/searchSlice";

const Head = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [showSuggestion, setShowSuggestion] = useState(false);
   const searchCache = useSelector((store) => store.search);
   const dispatch = useDispatch();

   useEffect(() => {
      const timerId = setTimeout(() => {
         // when searchQuery is empty it will not call
         if (searchQuery) {
            if (searchCache[searchQuery]) {
               setSuggestions(searchCache[searchQuery]);
            } else {
               getSearchSuggestions();
            }
         }
      }, 1000);
      return () => {
         clearTimeout(timerId);
      };
   }, [searchQuery]);

   const getSearchSuggestions = async () => {
      console.log("API CALL :", searchQuery);
      try {
         const data = await fetch(
            YOUTUBE_SEARCH_API +
               `${searchQuery}` +
               "&key=" +
               `${GOOGLE_API_KEYS}`
         );
         const jsonData = await data.json();
         // console.log("jsonData : ", jsonData);
         setSuggestions(jsonData?.items);
         // update cache
         dispatch(
            cacheResults({
               [searchQuery]: jsonData?.items,
            })
         );
      } catch (error) {
         console.log("Head.jsx - getSearchSuggestions : ", error.message);
      }
   };

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
               {/* ----- search ------ */}
               <div>
                  <input
                     className="w-1/3 border border-gray-500 rounded-l-full p-1 px-5"
                     type="text"
                     name="search"
                     onChange={(e) => setSearchQuery(e.target.value)}
                     onFocus={() => setShowSuggestion(true)}
                     onBlur={() => setShowSuggestion(false)}
                  />
                  <button className="border border-gray-400 rounded-r-full bg-gray-100 p-1 px-4">
                     Search
                  </button>
               </div>
               {/* ----- suggestions ------ */}
               {showSuggestion && (
                  <div className="fixed bg-white mx-3 py-2 px-2 w-80  shadow-lg rounded-lg border border-gray-100">
                     <ul className="">
                        {suggestions?.map((suggestion, i) => (
                           <li
                              key={i}
                              className="py-2 shadow-sm hover:bg-gray-100"
                           >
                              {suggestion?.snippet?.title}
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
            <div className="col-span-1">
               <i className="fa-solid fa-user"></i>
            </div>
         </div>
      </>
   );
};

export default Head;

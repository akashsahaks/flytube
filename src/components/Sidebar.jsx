import React from "react";
import { useSelector } from "react-redux";
import store from "../state/store";

const Sidebar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

   return (
      isMenuOpen && (
         <>
            <div className="p-5 shadow-lg w-48">
               <h1 className="font-bold">Subscription</h1>
               <ul className="">
                  <li> Home</li>
                  <li> Shorts </li>
                  <li> Videos </li>
                  <li> Live</li>
               </ul>
               <h1 className="font-bold">Watch Later</h1>
               <ul className="">
                  <li> Music</li>
                  <li> Sports </li>
                  <li> Gaming </li>
                  <li> Movies</li>
               </ul>
               <h1 className="font-bold"></h1>
               <ul className="">
                  <li> Music</li>
                  <li> Sports </li>
                  <li> Gaming </li>
                  <li> Movies</li>
               </ul>
               <h1 className="font-bold">Watch Later</h1>
               <ul className="">
                  <li> Music</li>
                  <li> Sports </li>
                  <li> Gaming </li>
                  <li> Movies</li>
               </ul>
            </div>
         </>
      )
   );
};

export default Sidebar;

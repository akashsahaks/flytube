import React from "react";
import Button from "./Button";

const ButtonList = () => {
   const btnList = ["All", "Live", "Gaming", "Songs", "Cricket", "Cooking"];
   return (
      <>
         <div className="flex">
            {btnList?.map((btnName) => (
               <Button btnName={btnName} key={btnName} />
            ))}
         </div>
      </>
   );
};

export default ButtonList;

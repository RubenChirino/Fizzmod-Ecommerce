import React from "react";

export default function Rebaje({ discount, notshow}){

   return(
    <div className={`card-header ${notshow}`}>   
        <div className="discount-style">
            <div className="text-center circle-text">
                {`-${discount}%`}
            </div>
        </div>
    </div>
   )

}
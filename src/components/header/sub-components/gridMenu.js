import React from "react"; 
import Logo from "./logo";
import GridNav from "./gridNav";

export default function GridMenu(){

   return(
    <div className="row sticky-top header-nav-bottom margin-properties-header">
        <Logo />
        <GridNav />
    </div>
   )

}
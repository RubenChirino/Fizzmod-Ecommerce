import React from "react";
import Logo from "./logo";
import GridSection from "./gridSection";

export default function GridMenu(){

   return(
    <div className="row sticky-top header-nav-bottom margin-properties-header">
        <Logo />
        <GridSection />
    </div>
   )

}
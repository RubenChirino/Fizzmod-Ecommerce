import React from "react";
import TopNav from "./topnav"; 
import Search from "./search";
import QuickCart from "./quickCart";

export default function GridNav(){

    return(

        <div className="col-12 col-md-12 col-lg-10"> 
            <TopNav />

            <div className="row">
                <Search />
                <QuickCart />
            </div>
            
        </div> 

    );

}
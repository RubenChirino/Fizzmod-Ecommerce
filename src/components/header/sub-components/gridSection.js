import React from "react";
import TopNav from "./topnav";
import Search from "./search";
import QuickCart from "./quickCart";

export default function GridSection(){

    return(

        <div className="col-10">

            <TopNav />

            <div className="row">

                <Search />

                <QuickCart />

            </div>

        </div> 

    );

}
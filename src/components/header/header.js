import React, { Fragment }  from "react";
import Logo from "./sub-components/logo";
import TopNav from "./sub-components/topnav";
import GridSection from "./sub-components/gridSection";
import Categories from "./sub-components/categories";

export default function Header(){

    return(
    
    <Fragment>    
       
        <div className="row margin-properties-header">
            <Logo />
            <GridSection />
        </div>

        <div className="categories-section">
            <div className="row margin-properties-header"> 
            <Categories /> 
            </div>
        </div>

    </Fragment>

    );

}
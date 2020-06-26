import React, { Fragment }  from "react";
import "./header.css";
import GridMenu from "./sub-components/gridMenu";
import GridCategories from "./sub-components/gridCategories";

export default function Header(){  

    return(
    
    <Fragment>    

        <GridMenu />
        
        <GridCategories />

    </Fragment>

    );

}



import React, { Fragment } from "react";
import "./body.css";
import GridSliders from "./sub-components/gridSliders";
import GridProducts from "./sub-components/gridProducts";

export default function Body(){

    return( 
        <Fragment>

            <GridSliders />  

            <GridProducts />

        </Fragment>
    );

}


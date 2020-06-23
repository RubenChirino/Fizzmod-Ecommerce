import React, { Fragment } from "react";
import Sliders from "./sub-components/sliders";
import GridSection from "../header/sub-components/gridSection";
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


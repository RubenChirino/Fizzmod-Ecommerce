import React, { Fragment } from "react";
import useSliders from "../../../hooks/useSliders";
import { Link } from "react-router-dom";

export default function Sliders(){ 

    const { sliders } = useSliders();

    return(
       <Fragment>
        {
            sliders.map((array, index) => {

            var active = index === 0 ? 'active' : '';     

            return <div key={index} className={`carousel-item ${active}`}>
                <Link to={array.href}>
                    <img className="d-block w-100 img-slider-styles" src={process.env.PUBLIC_URL + `/images/sliders/${array.imgName}`} 
                    alt={array.href}  /> 
                </Link>        
            </div>

            })
        }
       </Fragment>
    );

}
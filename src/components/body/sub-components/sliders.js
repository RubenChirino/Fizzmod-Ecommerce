import React, { Fragment } from "react";
import useSliders from "../../../hooks/useSliders";
import { Link } from "react-router-dom";

//require(`../../../images/sliders-img/Banner_1.png`);

export default function Sliders(){

    const { sliders } = useSliders();

    return(
       <Fragment>
        {
            sliders.map((array, index) => {

            var active = index === 0 ? 'active' : '';     

            return <div key={index} className={`carousel-item ${active}`}>
                <Link to={array.href}>
                    <img className="d-block w-100" src={process.env.PUBLIC_URL + `/images/${array.imgName}`} 
                    alt={array.href} height="350px" />
                </Link>        
            </div>

            })
        }
       </Fragment>
    );

}
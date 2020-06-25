import React from "react";
import { Link } from "react-router-dom";

export default function Product({ rebaje, href, image, title, pricebefore, pricenow, notshow }){

    return(
        <div className="col-3 card products-card-styles"> 

            <Link to={href}>
                <div className="card-header">   
                    {rebaje}
                </div>

                <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${image}`}
                alt={title} />
                <div className="card-body text-center">
                    <h5 className="card-title title-card-styles text-center">{title}</h5>
                    <p className={`card-price-before ${notshow}`}>{`$ ${pricebefore}`}</p>
                    <p className="card-price-now">{`$ ${pricenow}`}</p>
                </div>
            </Link>    

        </div>
    )

}
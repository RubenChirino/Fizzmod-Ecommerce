import React, { Fragment } from "react";
import useCategories from "../../../hooks/useCategories";
import { Link } from "react-router-dom";

export default function Categories(){ 

    const { categories } = useCategories(); 

    return(
            
        <Fragment>        
            {
            categories.map((array, index) => 
                <div className="col-sm-6 col-md col-lg text-center categories-styles" key={index}> 
                <Link className="text-categories-styles" 
                to={array.href}>{array.title}</Link>
                </div>)
            }
        </Fragment>

    );

}

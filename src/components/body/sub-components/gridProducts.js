import React, { Fragment, useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import BodyTitle from "./bodyTitle";
import ListOfFilters from "./listOfFilters";
import ListOfProducts from "./listOfProducts";

export default function GridProducts(){  

    //API
    const { information } = useProducts();

    //Local States
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(function(){
        if(information.products !== undefined && information.filters !== undefined){
            setProducts(information.products);
            setFilters(information.filters);
        }
    },[information.products, information.filters])

    return(
        <Fragment>

            <BodyTitle />

            <div className="row margin-properties-body mt-4">
        
                <ListOfFilters filters={filters} />

                <ListOfProducts products={products} />

            </div>

        </Fragment>  
    );

}


/*




*/
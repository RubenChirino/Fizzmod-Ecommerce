import React, { Fragment, useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import BodyTitle from "./bodyTitle";
import ListOfFilters from "./listOfFilters";
import ListOfProducts from "./listOfProducts";
import { useCallback } from "react";

export default function GridProducts(){  

    //API
    const { information } = useProducts();

    //Local States
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    //Filters Result
    const [filtersResult, setFiltersResult] = useState([])
    const [actualFilters, setActualFilters] = useState([]);

    useEffect(function(){
        if(information.products !== undefined && information.filters !== undefined){
            setProducts(information.products);
            setFilters(information.filters);
        }
    },[information.products, information.filters, actualFilters])

    //-------------------------------------------

    const filtrarPorFieldandId = useCallback(({attributes}) => {

        for(var i = 0; i < attributes.length; i++){

            for(var x = 0; x < actualFilters.length; x++){

                if (attributes[i].field === actualFilters[x].field && attributes[i].value.replace(" ","") === actualFilters[x].id){
                    return true;
                  } else {
                    return false;
                  }

            }

        }

    },[actualFilters])

    //----------------------------------------------

    function captureFilters(field, id, refCheckBox){
    
        var check = refCheckBox.current.checked;

        /* Bad Practice */
        if(check){
            check = false;
        }else{
            check = true;
        }

        if(check){
            setActualFilters(prevGifs => prevGifs.concat({field: field, id: id})) //   {...actualFilters, field: field, id: id}
        }else{
            setActualFilters([]);
        }

        setFiltersResult(products.filter(filtrarPorFieldandId))

    }

    return(
        <Fragment>

            <BodyTitle />

            <div className="row margin-properties-body mt-4">
        
                <ListOfFilters captureFilters={captureFilters} filters={filters} />

                <ListOfProducts filtersResult={filtersResult} actualFilters={actualFilters} products={products} />

            </div>

        </Fragment>  
    );

}
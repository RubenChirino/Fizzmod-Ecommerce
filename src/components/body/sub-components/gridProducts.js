import React, { Fragment, useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";
import BodyTitle from "./bodyTitle";

export default function GridProducts(){  

    //API
    const { information } = useProducts();
    const { products, filters } = information;

    //Local States
    const [productos, setProductos] = useState([]);
    const [filtros, setFiltros] = useState([]);

    useEffect(function(){
        if(products !== undefined && filters !== undefined){
            setProductos(products);
            setFiltros(filters);
        }
    },[products, filters])

    return(
        <Fragment>

        <BodyTitle />

        <div className="row margin-properties-body mt-4">
    
            <div className="col-2 margin-filter">

                {
                   filtros.map(({ title, field, values }, index) => 
                    
                   <Fragment key={index}>

                    <h4 className="title-filter-styles mt-4">{title}</h4>
                    <hr></hr> 

                    <ul className="list-group">
                        {
                            values.map((array, index) => {
 
                                var cleaningData = array.replace(" ", "");
                                cleaningData = cleaningData.replace("á","a");
                                cleaningData = cleaningData.replace("é","e");
                                var inputId = cleaningData;

                                return(
                                <li key={index} className="list-group-item mt-1 mb-1">
                                    <input type="checkbox" className="form-check-input" id={inputId} />
                                    <label className="form-check-label list-text-filter" htmlFor={inputId}>{array}</label>
                                </li>
                                )                               

                            })
                        }
                    </ul>

                   </Fragment>

                   )
                }                      
      
            </div>


            <div className="col-10">
                <div className="row"> 

                {
                productos.map((array) => {

                    var notShow = "";
                    var res = 0;

                    if(array.price.listPrice > array.price.sellingPrice){

                        //Calc discount
                        var porcent = array.price.listPrice - array.price.sellingPrice;
                        porcent = porcent / array.price.listPrice;
                        var round = porcent.toString();
                        round = round.substring(0,4);
                        res = parseFloat(round) * 100;

                    }else{
                        notShow = "invisible";
                    }

                    var rebaje = <div className={`discount-style ${notShow}`}>
                                <div className="text-center circle-text">
                                    {`-${res}%`}
                                </div>
                            </div>;

                  return(
                    <div key={array.id} className="col-3 card products-card-styles"> {/* my-3 */}

                        <div className="card-header">  
                            {rebaje}
                        </div>
    
                        <Link to={array.href}>
                            <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                            alt={array.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title title-card-styles text-center">{array.title}</h5>
                                <p className={`card-price-before ${notShow}`}>{`$ ${array.price.listPrice}`}</p>
                                <p className="card-price-now">{`$ ${array.price.sellingPrice}`}</p>
                            </div>
                        </Link>    
    
                    </div>
                  );
                    

                })
                }

                </div> 
            </div>



        </div>

        </Fragment>  
    );

}


/*




*/
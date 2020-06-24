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

    /*const { values } = filters;

    console.log("Vamos!", values);*/

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
                            values.map((array, index) =>

                                <li key={index} className="list-group-item mt-1 mb-1">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">{array}</label>
                                </li>

                            )
                        }
                    </ul>

                   </Fragment>

                   )
                }                      
      
            </div>


            <div className="col-10">
                <div className="row"> 

                {
                productos.map((array) => 
                    
                <div key={array.id} className="col-3 my-3 card products-card-styles">

                    <Link to={array.href}>
                        <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                        alt={array.title} />
                        <div className="card-body text-center">
                            <h5 className="card-title title-card-styles text-center">{array.title}</h5>
                            <p className="card-price-before">{`$ ${array.price.listPrice}`}</p>
                            <p className="card-price-now">{`$ ${array.price.sellingPrice}`}</p>
                        </div>
                    </Link>    

                </div>)
                }

                </div> 
            </div>



        </div>

        </Fragment>  
    );

}


/*


{
                        values.map((array, index) =>
                        
                        //console.log(array)

                        <ul key={index} className="list-group">
                            <li className="list-group-item">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">{array}</label>
                            </li>
                        </ul>

                        )
                    }




    <div className=""> 
                <h4 className="title-filter-styles">Titulo filtros nro. 1</h4>
                <hr></hr> 
                            
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </li>
                </ul>
            </div> 



    
 {
                products.map((array, index) => 
                    
                <div key={index} className="col-3 my-3 card products-card-styles">

                <Link to={array.href}>
                    <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                    alt={array.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title title-card-styles text-center">{array.title}</h5>
                        <p className="card-price-before">{`$ ${array.price.listPrice}`}</p>
                        <p className="card-price-now">{`$ ${array.price.sellingPrice}`}</p>
                    </div>
                </Link>    

                </div>)
                }




*/
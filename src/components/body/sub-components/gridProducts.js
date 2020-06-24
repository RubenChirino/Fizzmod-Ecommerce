import React, { Fragment } from "react";
import useProducts from "../../../hooks/useProducts";
import { Link } from "react-router-dom";
import BodyTitle from "./bodyTitle";

export default function GridProducts(){

    const { products } = useProducts();

    console.log(products);

    return(
        <Fragment>

        <BodyTitle />

        <div className="row margin-properties-body">
    
    
            <div className="col-2 margin-filter">
                <h4 className="title-filter-styles">Titulo filtros nro. 1</h4>
                <hr className=""></hr> 
                
                 
                <ul class="list-group">
                    <li class="list-group-item">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </li>
                </ul>
      
            </div>



            <div className="col-10">
                <div className="row"> 

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

                </div> 
            </div>



        </div>

        </Fragment>  
    );

}


/*

    <div className="col-3">
        <div key={index} className="card">
            <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                alt={array.title} />
            <div className="card-body">
                <h5 className="card-title text-center">{array.title}</h5>
                <p className="card-text">{array.price.listPrice}</p>
                <p className="card-text">{array.price.sellingPrice}</p>
            </div>
        </div>
    </div> 



    <ul class="list-group">
                    <li class="list-group-item">
                        Dapibus
                    </li>
                </ul>



    <div key={index} className="col-3 my-3 card products-card-styles">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                    alt={array.title} />
                    <div className="card-body">
                        <h5 className="card-title title-card-styles text-center">{array.title}</h5>
                        <p className="card-text">{array.price.listPrice}</p>
                        <p className="card-text">{array.price.sellingPrice}</p>
                    </div>
                </div>

*/
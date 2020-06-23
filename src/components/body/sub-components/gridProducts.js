import React, { Fragment } from "react";
import useProducts from "../../../hooks/useProducts";

export default function GridProducts(){

    const { loadingProducts ,products } = useProducts();

    console.log(products);

    return(
        <Fragment>

        <div className="row margin-properties-body">
           <hr className="col body-line-styles"></hr> 
           <h2 className="col-2 text-center body-title-styles">Products</h2> 
           <hr className="col body-line-styles"></hr>    
        </div>

        <div className="row margin-properties-body">
    
            <div className="col-2">
                <h4>Titulo filtros nro. 1</h4>
                <hr className=""></hr> 
            </div>

            <div className="col-10">
                
            
               
            

            </div>

        </div>

        </Fragment>  
    );

}


/*

<div class="card col-3">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text">Some quick example</p>
                        <p class="card-text">Some quick example</p>
                    </div>
                </div>


                {
                products.map((array, index) => 
                    
                <div key={index} class="card col-3">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                    alt={array.title} />
                    <div class="card-body">
                        <h5 class="card-title text-center">{array.title}</h5>
                        <p class="card-text">{array.price.listPrice}</p>
                        <p class="card-text">{array.price.sellingPrice}</p>
                    </div>
                </div>)
                }


                 { loadingProducts ? <h1>hola</h1> :       
                    
                    products.map((array, index) => 
                    
                    <div key={index} class="card col-3">
                        <img class="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                        alt={array.title} />
                    </div>)
                }


*/
import React from "react";
import { Link } from "react-router-dom";

export default function Products(){

    return(

        <div className="col-5 col-sm-5 col-md-5 col-lg-2 grid-footer-list"> {/* col-12 col-md-5 col-lg-2 */}
 
        <h4 className="title-footer-list-styles">Productos</h4>
        <hr className="bg-light"></hr> 

            <ul className="list-group">       
                <li className="list-group-item mt-1 mb-1">
                    <Link className="links-footer-styles" to="#CompreJunto">Compre Junto</Link>    
                </li>  

                <li className="list-group-item mt-1 mb-1">
                    <Link className="links-footer-styles" to="#KitLook">Kit Look</Link>    
                </li> 

                <li className="list-group-item mt-1 mb-1">
                    <Link className="links-footer-styles" to="#Completatucompra">Completá tu compra</Link>    
                </li> 

                <li className="list-group-item mt-1 mb-1">
                    <Link className="links-footer-styles" to="#Shopthelook">Shop the look</Link>    
                </li>  

                <li className="list-group-item mt-1 mb-1">
                    <Link className="links-footer-styles" to="#SinStock">Sin Stock</Link>    
                </li>                
            </ul>
          
        </div>

    );

}
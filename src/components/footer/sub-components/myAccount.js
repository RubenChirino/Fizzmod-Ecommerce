import React from "react";
import { Link } from "react-router-dom";

export default function MyAccount(){

    return(
        <div className="col-5 col-sm-5 col-md-5 col-lg-2 grid-footer-list"> 
 
            <h4 className="title-footer-list-styles">Mi cuenta</h4>
            <hr className="bg-light"></hr> 

                <ul className="list-group">       
                    <li className="list-group-item mt-1 mb-1">
                        <Link className="links-footer-styles" to="#Mispedidos">Mis pedidos</Link>    
                    </li>  

                    <li className="list-group-item mt-1 mb-1">
                        <Link className="links-footer-styles" to="#Wishlist">Wishlist</Link>    
                    </li> 

                    <li className="list-group-item mt-1 mb-1">
                        <Link className="links-footer-styles" to="#Productosfrecuentes">Productos frecuentes</Link>    
                    </li> 

                    <li className="list-group-item mt-1 mb-1">
                        <Link className="links-footer-styles" to="#Mislistas">Mis listas</Link>    
                    </li>  

                    <li className="list-group-item mt-1 mb-1">
                        <Link className="links-footer-styles" to="#Misrecetas">Mis recetas</Link>    
                    </li>                
                </ul>
                  
        </div>
    );

}
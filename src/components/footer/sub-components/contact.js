import React from "react";
import { Link } from "react-router-dom";

export default function Contact(){

    return(
    <div className="col-12 col-sm-12 col-md-12 col-lg-2 grid-footer-list movil-list-margin"> 
    
    <h4 className="title-footer-list-styles">Contactanos</h4>
    <hr className="bg-light"></hr> 

        <ul className="list-group">       
            <li className="list-group-item mt-1 mb-1">
                <Link className="links-footer-styles" to="#Sucursales">Nuestras Sucursales</Link>    
            </li>  

            <li className="list-group-item mt-1 mb-1">
                <Link className="links-footer-styles" to="#HorariosyTeléfonos">Horarios y Teléfonos</Link>    
            </li>                
        </ul>
    
    </div>
    );

}
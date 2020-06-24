import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){

    return(

        <footer className="grid-footer-styles">
            <div className="row justify-content-center margin-properties-footer">
                
               <div className="col-2 grid-footer-list">
 
                <h4 className="title-footer-list-styles">Productos</h4>
                <hr className="bg-light"></hr> 

                    <ul className="list-group">       
                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Compre Junto</Link>    
                        </li>  

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Kit Look</Link>    
                        </li> 

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Completá tu compra</Link>    
                        </li> 

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Shop the look</Link>    
                        </li>  

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Sin Stock</Link>    
                        </li>                
                    </ul>
                  
                </div>

                <div className="col-2 grid-footer-list">
 
                <h4 className="title-footer-list-styles">Mi cuenta</h4>
                <hr className="bg-light"></hr> 

                    <ul className="list-group">       
                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Mis pedidos</Link>    
                        </li>  

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Wishlist</Link>    
                        </li> 

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Productos frecuentes</Link>    
                        </li> 

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Mis listas</Link>    
                        </li>  

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Mis recetas</Link>    
                        </li>                
                    </ul>
                  
                </div>

                <div className="col-2 grid-footer-list">
 
                <h4 className="title-footer-list-styles">Contactanos</h4>
                <hr className="bg-light"></hr> 

                    <ul className="list-group">       
                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Nuestras Sucursales</Link>    
                        </li>  

                        <li className="list-group-item mt-1 mb-1">
                            <Link className="links-footer-styles" to="">Horarios y Teléfonos</Link>    
                        </li>                
                    </ul>
                  
                </div>

                <div className="col-3 text-center">

                       
                    <Link to="#facebook">
                        <i className="icon-icn_facebook facebook-icon-styles" /> 
                    </Link>  

                    <Link to="#twitter">
                        <i className="icon-icn_twitter twitter-icon-styles" />
                    </Link>  

                    <Link to="#youtube">
                        <i className="icon-icn_youtube youtube-icon-styles" />
                    </Link>                     
                  
                </div>
              
            
            </div>
        </footer>
         
    );

}

/*


 <div className="col">
                   <Link>Hola</Link>

                   <Link>Hola</Link>

                   <Link>Hola</Link>

                   <Link>Hola</Link>
               </div>

               <div className="col">
                   <Link>Hola</Link>

                   <Link>Hola</Link>
               </div>

               <div className="col">
                   <span>Hola</span>

                   <span>Hola</span>
               </div> 

               */
import React, { Fragment }  from "react";
import Logo from '../../images/logo_fizzmod.svg';

export default function Header(){

    return(
    
    <Fragment>    
       
        <div className="row margin-header">

            <div className="col-2 text-center logo-styles">
                <img src={Logo} alt="Logo" className="mt-3" />
            </div>

            <div className="col-10">

                <div className="row mt-1 mb-1 margin-topnav">
                    <div className="col">
                        <a className="options-styles">Ayuda</a>

                        <a className="options-styles">Mis pedidos</a>

                        <a className="options-styles">Mi cuenta</a>
                    </div>
                </div>

                <div className="row">

                    <div className="col-9 search-styles">
                        <div className="has-feedback">
                            <i className="icon-icn_search form-control-feedback" />
                            <input type="text" className="form-control" placeholder="Buscar un producto..." />
                        </div>
                    </div>

                    <div className="col-3 button-styles">  
                        <h5 className="text-center">
                        <i className="icon-icn_cart icon-size mr-3" />Mi Carrito
                        </h5>
                    </div>

                </div>

            </div>

        </div>

        <div>
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <h4>One Song</h4>
                    </div>

                </div>
            </div>
        </div>
   
    </Fragment>

    );

}
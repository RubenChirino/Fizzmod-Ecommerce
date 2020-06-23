import React from "react";
import { Link } from "react-router-dom";

export default function TopNav(){

    return(
        <div className="row mt-1 mb-1 margin-topnav">
            <div className="col">
                <Link to="#ayuda" className="options-styles">Ayuda</Link>

                <Link to="#pedidos" className="options-styles">Mis pedidos</Link>

                <Link to="#cuenta" className="options-styles">Mi cuenta</Link>
            </div>
       </div>
    );
     
}
import React from "react";
import LogoImg from '../../../images/logo/logo_fizzmod.svg';   

export default function Logo(){

    return(
        <div className="col-2 text-center logo-styles">
            <img src={LogoImg} alt="Logo" className="mt-3" />
        </div>
    );

}
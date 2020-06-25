import React from "react";  

export default function Logo(){  

    return(
        <div className="col-2 text-center logo-styles">
            <img src={process.env.PUBLIC_URL + `/images/logo/logo_fizzmod.svg`} alt="Logo" className="mt-3" />
        </div>
    );

}
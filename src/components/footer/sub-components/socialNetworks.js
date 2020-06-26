import React from "react";
import { Link } from "react-router-dom";

export default function SocialNetworks(){

    return(

    <div className="col-12 col-sm-12 col-md-6 col-lg-3 text-center movil-icons-margin"> 
                  
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

    );

}
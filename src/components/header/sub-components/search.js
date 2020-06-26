import React from "react";

export default function Search(){ 

   return(
    <div className="col-7 col-lg-9 search-styles">
        <div className="has-feedback">
            <i className="icon-icn_search form-control-feedback" />
            <input type="text" className="form-control" placeholder="Buscar un producto..." />
        </div>
    </div>
   );

}
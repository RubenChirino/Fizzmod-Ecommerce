import React, { Fragment } from "react";

export default function ListOfFilters({ filters }){

    return(

        <div className="col-12 col-sm-3 col-md-2 col-lg-2 margin-filter"> 

        {
           filters.map(({ title, field, values }, index) =>  
            
           <Fragment key={index}> 

            <h4 className="title-filter-styles mt-4">{title}</h4>
            <hr></hr> 

            <ul className="list-group">
                {
                    values.map((array, index) => {

                        var cleaningData = array.replace(" ", "");   
                        var inputId = cleaningData.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                        return(
                        <li key={index} className="list-group-item mt-1 mb-1">
                            <input type="checkbox" className="form-check-input" id={inputId} />
                            <label className="form-check-label list-text-filter" htmlFor={inputId}>{array}</label>
                        </li>
                        )                               

                    })
                }
            </ul>

            </Fragment>

           )
        }                      

    </div>
    

    );

}
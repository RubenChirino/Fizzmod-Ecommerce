import React, { Fragment } from "react";

export default function ListOfFilters({ filters }){

    return(

        <div className="col-2 margin-filter">

        {
           filters.map(({ title, field, values }, index) => 
            
           <Fragment key={index}>

            <h4 className="title-filter-styles mt-4">{title}</h4>
            <hr></hr> 

            <ul className="list-group">
                {
                    values.map((array, index) => {

                        var cleaningData = array.replace(" ", "");
                        cleaningData = cleaningData.replace("á","a");
                        cleaningData = cleaningData.replace("é","e");
                        var inputId = cleaningData;

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
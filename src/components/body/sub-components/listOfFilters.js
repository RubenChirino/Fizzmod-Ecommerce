import React, { Fragment } from "react";
import Filter from "./filter";

export default function ListOfFilters({ filters, captureFilters }){

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
                            <Filter captureFilters={captureFilters} key={index} 
                            field={field} id={inputId} title={array} />
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
import React, { useRef } from "react";

export default function Filter({ id, field, title, captureFilters }){

  const refCheckBox = useRef();

    return(
        <li className="list-group-item mt-1 mb-1">
            <input ref={refCheckBox} type="checkbox" className="form-check-input" id={id} />
            <label onClick={() => captureFilters(field, id, refCheckBox)} className="form-check-label list-text-filter" htmlFor={id}>{title}</label>
        </li>
    );

}

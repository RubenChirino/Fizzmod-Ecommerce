import React from "react";

export default function Filter({ id, title }){

    return(
        <li className="list-group-item mt-1 mb-1">
            <input type="checkbox" className="form-check-input" id={id} />
            <label className="form-check-label list-text-filter" htmlFor={id}>{title}</label>
        </li>
    );

}
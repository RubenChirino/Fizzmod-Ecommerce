import { BODY_API } from "./settings";

export default function getFilters(){
    
    return fetch(BODY_API).then(res => res.json()).then(response => {

        const result = response;

        return result;
    })

}
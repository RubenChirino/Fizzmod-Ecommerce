import { BODY_API } from "./settings";

export default function GetProducts(){

    return fetch(BODY_API).then(res => res.json()).then(response => {

        const result = response.products;

        return result;
    })

}
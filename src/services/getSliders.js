import { BODY_API } from "./settings"; 

export default function getSliders(){  
    
    return fetch(BODY_API).then(res => res.json()).then(response => {

        const result = response.slides;

        return result;
    })
  
}
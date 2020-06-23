import { CATEGORIES_API } from "./settings";

export default function getCategories(){  
    
    return fetch(CATEGORIES_API).then(res => res.json()).then(response => {

    const result = response.menu.categories;

    return result
      
    })
  
}


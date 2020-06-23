import { useState, useEffect } from "react";
import getCategories from "../services/getCategories";


export default function useCategories(){ 
 
    const [loadingCategories, setLoadingCategories] = useState(false);

    const [categories, setCategories] = useState([]);  

    useEffect(function(){
        setLoadingCategories(true);     
      
        getCategories().then(res => {
            setCategories(res);
            setLoadingCategories(false);
    
        })

    }, []);


    return { loadingCategories,  categories}  
}

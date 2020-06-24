import { useState, useEffect } from "react";
import getSliders from "../services/getSliders";

export default function useSliders(){ 
 
    const [loadingSliders, setLoadingSliders] = useState(false);

    const [sliders, setSliders] = useState([]);  

    useEffect(function(){
        setLoadingSliders(true);     
      
        getSliders().then(res => {
            setSliders(res);
            setLoadingSliders(false);
    
        })

    }, []);

    return { loadingSliders,  sliders}  
}
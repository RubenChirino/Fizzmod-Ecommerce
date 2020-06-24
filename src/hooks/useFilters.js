import { useState, useEffect } from "react";
import getSliders from "../services/getSliders";
import getFilters from "../services/getFilters";

export default function useFilters(){

    const [loadingFilters, setLoadingFilters] = useState(false);

    const [filters, setFilters ] = useState([]);

    useEffect(function(){
        setLoadingFilters(true);

        getFilters().then(res => {
            setFilters(res);
            setLoadingFilters(false);

        })
        
    },[]);

    return { loadingFilters, filters }
}
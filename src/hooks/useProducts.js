import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";

export default function useProducts(){

    const [loadingInformation, setLoadingInformation] = useState(false);

    const [information, setInformation] = useState([]);

    useEffect(function(){
        setLoadingInformation(true);

        getProducts().then(res => {
            setInformation(res);
            setLoadingInformation(false);
        })

    },[]);

    return { loadingInformation, information }
}

/*


import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";

export default function useProducts(){

    const [loadingProducts, setLoadingProducts] = useState(false);

    const [information, setProducts] = useState([]);

    useEffect(function(){
        setLoadingProducts(true);

        getProducts().then(res => {
            setProducts(res);
            setLoadingProducts(false);
        })

    },[]);

    return { loadingProducts, information }
}

*/
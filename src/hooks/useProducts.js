import { useEffect, useState } from "react";
import getProducts from "../services/getProducts";

export default function useProducts(){

    const [loadingProducts, setLoadingProducts] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(function(){
        setLoadingProducts(true);

        getProducts().then(res => {
            setProducts(res);
            setLoadingProducts(false);
        })

    },[]);

    return { loadingProducts, products }
}
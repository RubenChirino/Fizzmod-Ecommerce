import React from "react";
import Product from "./product";
import ProductDiscount from "../../../helpers/productDiscount";

export default function ActualProductsFilter({filtersResult}){

    console.log("Result:",filtersResult)

    return(
        <>
          {
            filtersResult.map((array) => {

                //------
                var notShow = "";
                var discount = 0;
    
                if(array.price.listPrice > array.price.sellingPrice){
                    discount = ProductDiscount(array.price.listPrice, array.price.sellingPrice);
                }else{
                    notShow = "invisible";
                }  
    
                return(
                    <Product key={array.id} discount={discount} href={array.href} 
                    image={array.image} title={array.title} pricebefore={array.price.listPrice} 
                    pricenow={array.price.sellingPrice} notshow={notShow} /> 
                );    
            })
          }
        </>
    )

}



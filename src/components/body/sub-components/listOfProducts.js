import React from "react";
import Product from "./product";
import ProductDiscount from "../../../helpers/productDiscount";

export default function ListOfProducts({ products }){ 

    return(
    <div className="col-12 col-sm-9 col-md-10 col-lg-10"> 
        <div className="row"> 

        { 
        products.map((array) => {

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

        </div> 
    </div>
    );

}

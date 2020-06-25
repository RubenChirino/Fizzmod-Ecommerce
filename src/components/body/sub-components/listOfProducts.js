import React from "react";
import { Link } from "react-router-dom";

export default function ListOfProducts({ products }){

    return(
    <div className="col-10">
        <div className="row"> 

        {
        products.map((array) => {

            var notShow = "";
            var res = 0;

            if(array.price.listPrice > array.price.sellingPrice){

                //Calc discount
                var porcent = array.price.listPrice - array.price.sellingPrice;
                porcent = porcent / array.price.listPrice;
                var round = porcent.toString();
                round = round.substring(0,4);
                res = parseFloat(round) * 100;

            }else{
                notShow = "invisible";
            }

            var rebaje = <div className={`discount-style ${notShow}`}>
                        <div className="text-center circle-text">
                            {`-${res}%`}
                        </div>
                    </div>;

          return(
            <div key={array.id} className="col-3 card products-card-styles"> 

                <Link to={array.href}>
                    <div className="card-header">  
                        {rebaje}
                    </div>

                    <img className="card-img-top" src={process.env.PUBLIC_URL + `/images/products/${array.image}`}
                    alt={array.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title title-card-styles text-center">{array.title}</h5>
                        <p className={`card-price-before ${notShow}`}>{`$ ${array.price.listPrice}`}</p>
                        <p className="card-price-now">{`$ ${array.price.sellingPrice}`}</p>
                    </div>
                </Link>    

            </div>
          );
            

        })
        }

        </div> 
    </div>
    );

}
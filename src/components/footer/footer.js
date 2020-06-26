import React from "react";
import "./footer.css";
import SocialNetworks from "./sub-components/socialNetworks";
import Contact from "./sub-components/contact";
import MyAccount from "./sub-components/myAccount";
import Products from "./sub-components/products";

export default function Footer(){

    return(

        <footer className="grid-footer-styles">
            <div className="row justify-content-center margin-properties-footer">
                
                <Products />

                <MyAccount />

                <Contact />

                <SocialNetworks />
              
            </div>
        </footer>
         
    );

}

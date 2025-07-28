import React from "react";
import "./CartWidget.css"; 
 
const CartWidget = () =>{

    const imgCart = "shoppingCart.png";

    return(
        <div>
            <img className= "imgCarrito" src={imgCart} alt="imagen de carrito de compras" />
        </div>
    )
}

export default CartWidget;
import "./CartWidget.css"; 
 
const CartWidget = () =>{

    const imgCart = "cart.png";

    return(
        <div>
            <img className= "imgCarrito" src={imgCart} alt="imagen de carrito de compras" />
        </div>
    )
}

export default CartWidget;
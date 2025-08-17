import "./CartWidget.css";
import cartImg from "../../../public/cart.png"
 
const CartWidget = () =>{

    return(
        <div>
            <img className= "imgCarrito" src={cartImg} alt="imagen de carrito de compras" />
        </div>
    )
}

export default CartWidget;
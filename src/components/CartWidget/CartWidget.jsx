import "./CartWidget.css";
import { useContext } from "react"
import { carritoContext } from "../../context/carritoContext"
import { Link } from "react-router-dom"
import cartImg from "../../../public/cart.png"
 
const CartWidget = () =>{

  const {cantidadTotal} = useContext(carritoContext)

  return (
    <div>

      <Link to="/cart">
        <img className="imgCarrito" src={cartImg} alt="Imagen del carrito de compras" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      
      </Link>


    </div>
  )
}

export default CartWidget
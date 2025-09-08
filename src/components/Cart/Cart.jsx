import { useContext } from 'react'
import { carritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

const Cart = () => {

    const {carrito,vaciarCarrito, total,cantidadTotal} = useContext(carritoContext)

    if(cantidadTotal === 0){
        return(
            <div  className='emptyCart'>
                <h2>No hay productos en el carrito.</h2>
                <Link to="/"><span>Ver Productos</span></Link>
            </div>
        )
    }

  return (
    <div className='cartContainer'>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/> )
        }
        <p><span>Total:</span> ${total}</p>
        <p><span> Cantidad Total:</span> {cantidadTotal}</p>
        <button className="optionCart" onClick={()=>vaciarCarrito()}> Vaciar Carrito </button>
        <button className="optionCart"><Link to="/checkout"> Finalizar Compra</Link></button>

    </div>
  )
}

export default Cart
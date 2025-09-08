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
                <span><Link to="/">Ver Productos</Link></span>
            </div>
        )
    }

  return (
    <div className='cartContainer'>
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/> )
        }
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar Compra</Link>

    </div>
  )
}

export default Cart
import { useContext } from "react"
import { carritoContext } from "../../context/carritoContext"

const   CartItem = ({item,cantidad}) => {

  const {eliminarProducto} = useContext(carritoContext)

  return (
    <>
        <h4>{item.instrumento}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button className="deleteItemButton" onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
        <hr />
    </>
  )
}

export default CartItem
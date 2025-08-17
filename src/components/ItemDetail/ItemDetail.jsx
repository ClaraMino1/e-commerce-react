import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id,stock}) => {
  
  const [cantidad, setCantidad] = useState(0)

  const handleCantidad = (cantidad) =>{
    setCantidad(cantidad)
  }


  return (
    <div>
        <h2>estoy en el detalle del producto: {id}</h2>
    
    {
      cantidad > 0 ? (<Link to="/cart">Terminar mi compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad}/>)
    }
    </div>
  )
}

export default ItemDetail
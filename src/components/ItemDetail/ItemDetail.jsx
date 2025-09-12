import { useState,useContext } from 'react'
import { carritoContext } from "../../context/carritoContext"
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { toast } from 'react-toastify'


const ItemDetail = ({id,instrumento,stock,marca,estilo,precio,categoria,imageUrl}) => {
  
  const [cantidad, setCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(carritoContext)

  const handleCantidad = (cantidad) =>{
    setCantidad(cantidad)
    const item = {id,instrumento,precio}
    agregarAlCarrito(item,cantidad)
    toast.success("Su compra fue enviada al carrito",{autoClose: 1000, theme:"dark", position: "top-right"})

  }

  return (
    <article className='itemDetail'>

      <img src={imageUrl} alt={instrumento} />

      <div className='itemInfoContainer'>
        <h1>{instrumento}</h1>
        <h2>Marca:  <span>{marca}</span></h2>
        <h2>Estilo:  <span>{estilo}</span></h2>
        <h3>Precio: <span>${precio}</span></h3>
        <h3>Categoria: <span>{categoria}</span></h3>
        <h3>
          {
            cantidad > 0 ? (<button className="button-details" role="button"><Link to="/cart" className='buttonFinish'>Terminar mi compra</Link></button>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad}/>)
          }
        </h3>
      </div>
    
    </article>
  )
}

export default ItemDetail

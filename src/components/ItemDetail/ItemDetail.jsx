import { useState,useContext } from 'react'
import { carritoContext } from "../../context/carritoContext"
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"


const ItemDetail = ({id,instrumento,stock,marca,estilo,precio,categoria,imageUrl}) => {
  
  const [cantidad, setCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(carritoContext)

  const handleCantidad = (cantidad) =>{
    setCantidad(cantidad)
    const item = {id,instrumento,precio}
    agregarAlCarrito(item,cantidad)
  }


  return (
    <article className='itemDetail'>
      <h1 style={{color:"red"}}>faltan los estilos</h1>
      <h2>{instrumento}</h2>
      <h3>Marca: {marca}</h3>
      <h3>Estilo: {estilo}</h3>
      <p>Precio: ${precio}</p>
      <p>Categoria: {categoria}</p>
      <img src={imageUrl} alt={instrumento} />
    
    {
      cantidad > 0 ? (<Link to="/cart">Terminar mi compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad}/>)
    }
    </article>
  )
}

export default ItemDetail
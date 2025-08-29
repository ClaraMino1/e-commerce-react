import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({id,instrumento, marca, estilo,precio,imageUrl,stock}) => {
  return (
    
    <Link to={`/item/${id}`} className='itemCard'>
      
      <img className="itemImg" src={imageUrl} alt={instrumento} />

      <div className='itemDetails'>
        <h3>{instrumento}</h3>
        <p>Marca: {marca}</p>
        <p>Estilo: {estilo}</p>
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
        <button>Ver detalles</button>
      </div> 

    </Link>
  )
}

export default Item
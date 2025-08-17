import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({id,instrumento, marca, modelo,precio}) => {
  return (
    <div className='itemCard'>
      <h3>{instrumento} {modelo}</h3>
      <p>marca: {marca}</p>
      <p>modelo: {modelo}</p>
      <p>precio: {precio}</p>
      <Link to={`/item/${id}`}><button>Ver detalles</button></Link> 
    </div>
  )
}

export default Item
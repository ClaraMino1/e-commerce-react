import { Link } from 'react-router-dom';

const Item = ({id,instrumento, marca, modelo,precio}) => {
  return (
    <div>
        <h3>Intrumento: {instrumento}</h3>
        <p>marca: {marca}</p>
        <p>modelo: {modelo}</p>
        <p>precio: {precio}</p>
        <Link to={`/item/${id}`}><button>Ver detalles</button></Link> 
    </div>
  )
}

export default Item
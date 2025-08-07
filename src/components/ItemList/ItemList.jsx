import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map((product)=> <Item key={product.id}{...product}/>)}
    </div>
  )
}

export default ItemList
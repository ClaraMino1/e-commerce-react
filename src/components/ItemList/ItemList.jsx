import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) => {
  
  return (
    <section className='itemList'>
         {productos.map((product)=> <Item key={product.id} {...product}/>)} 
    </section>
  )
}

export default ItemList
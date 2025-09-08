import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
        
    }
 
    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

  return (
            <>
            <div className="ItemCountContainer">
                <h4>Cantidad</h4>
                <button className="button-details button-count"  role="button" onClick={decrementar}> - </button>
                <p>{contador}</p>
                <button className="button-details button-count" role="button"  onClick={incrementar}> + </button>
            </div>
            <div>
                <button className="button-details" role="button" style={{width:200}}onClick={()=>funcionAgregar(contador)}> Agregar al carrito</button>
            </div>
            
            
            </>
             
  )
}

export default ItemCount
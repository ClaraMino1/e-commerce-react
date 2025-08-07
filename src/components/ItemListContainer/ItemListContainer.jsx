import { useState,useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"


//generar listado de productos
const ItemListContainer = ({ titulo }) =>{

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProductos()
            .then(respuesta=>setProductos(respuesta))
            .catch(error=> console.error(error))
            
    },[])

    return(
        <>
            <h2>{titulo}</h2>
            <ItemList productos={productos}/>
            
        </>
    )

}

export default ItemListContainer
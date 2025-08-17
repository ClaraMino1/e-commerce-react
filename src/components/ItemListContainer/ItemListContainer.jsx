import { useState,useEffect } from "react"
import { getProductos,getProductoPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


//generar listado de productos
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{

        const funcionProductos = () => categoria ? getProductoPorCategoria(categoria) : getProductos()

        funcionProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.error(error))

       
    },[categoria])
    return(
        <>
            <ItemList productos={productos}/>
            
        </>
    )

}

export default ItemListContainer
import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {db} from "../../services/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Loader from "../Loader/Loader"

//generar listado de productos
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoria} = useParams()

    useEffect(()=>{
        setLoading(true)
        const misProductos = categoria ? query(collection(db,"Productos"), where("categoria", "==", categoria)) : collection(db, "Productos")

        getDocs(misProductos)
        .then(res=> {
            const nuevosProductos = res.docs.map(doc=> {
                const data = doc.data()
                return{id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
        .finally(()=>{
            setLoading(false)
        })

    },[categoria])

    return(
        <>
            {loading ? <Loader/> : <ItemList productos={productos}/> }
        </>
    )

}

export default ItemListContainer
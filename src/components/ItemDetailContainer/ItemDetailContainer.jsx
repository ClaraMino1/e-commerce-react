import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import {getDoc, doc} from "firebase/firestore"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState(null)
    const { id } = useParams()

  useEffect(()=>{
  setLoading(true)
  const nuevoDoc = doc(db, "Productos", id)

  getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto)
    })
    .catch(error => console.log(error))
    .finally(()=>{
      setLoading(false)
    })
}, [id])

    
  return (
    <>
    {loading ? <Loader/> : <ItemDetail {...producto} />}
    </>
 
  )
}

export default ItemDetailContainer
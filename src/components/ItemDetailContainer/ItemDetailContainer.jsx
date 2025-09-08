import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import {getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { id } = useParams()

  useEffect(()=>{
  const nuevoDoc = doc(db, "Productos", id)

  getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto)
    })
    .catch(error => console.log(error))
}, [id])

    
  return (
    producto ? <ItemDetail {...producto} /> : <p>Cargando producto...</p>
  )
}

export default ItemDetailContainer
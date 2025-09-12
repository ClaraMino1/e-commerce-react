import { useContext, useState } from "react"
import { carritoContext } from "../../context/carritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(carritoContext)

  const manejadorFormulario = async (event) => {
    event.preventDefault()

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completá todos los campos")
      return
    }

    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden")
      return
    }

    setLoading(true)
    setError("")

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        instrumento: producto.item.instrumento,
        cantidad: producto.cantidad,
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    }

    try {
      // Actualizar stock
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "Productos", productoOrden.id)
          const productoDoc = await getDoc(productoRef)
          const stockActual = productoDoc.data().stock

          await updateDoc(productoRef, {
            stock: stockActual - productoOrden.cantidad
          })
        })
      )

      // Crear orden
      const docRef = await addDoc(collection(db, "ordenes"), orden)
      setOrdenId(docRef.id)
      vaciarCarrito()
    } catch (error) {
      console.error("Error en la compra:", error)
      setError("Ocurrió un error al procesar la compra")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>

      <form onSubmit={manejadorFormulario}>
        {carrito.map(producto => (
          <div key={producto.item.id}>
            <p>{producto.item.instrumento} x {producto.cantidad}</p>
            <p>${producto.item.precio}</p>
            <hr />
          </div>
        ))}

        <div className="checkoutResumen">
          <h3>Cantidad total: {cantidadTotal}</h3>
          <h3>Total a pagar: ${total}</h3>
        </div>

        <div>
          <label>Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>Telefono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Email Confirmacion</label>
          <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar Compra"}
        </button>


        {!loading && ordenId && (
          <strong>Gracias por tu compra!! Tu número de orden es: {ordenId}</strong>
        )}
      </form>
    </div>
  )
}

export default Checkout

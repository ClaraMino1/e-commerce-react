
//preview del producto
const Item = ({id,modelo,instrumento,marca,precio}) => {
  return (
   
    <div>
        <h3>{modelo}</h3>
        <h4>{instrumento}</h4>
        <h4>{marca}</h4>
        <p>{precio}</p>
    </div>
   
  )
}

export default Item
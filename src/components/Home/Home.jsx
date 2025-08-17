import guitar2 from '../../assets/guitar2.jpg'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import "./Home.css"

const Home = () => {
  return (
    <>
    <section className='home'>
        <div className="home-text">
            <p className="home-subtitle">MÁS DE 10 AÑOS EN EL MERCADO</p>
            <h1 className="home-title">
                Viví la música. Elegí tu próximo instrumento hoy.
            </h1>
        </div>
    
        <img className="backGroundGuitar" src={guitar2} alt="guitarra electrica" />
    </section>

    <section>
        <ItemListContainer/>
    </section>
    </>
  )
}

export default Home
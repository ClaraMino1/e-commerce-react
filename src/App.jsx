import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter,Route,Routes}   from 'react-router-dom';
import { CarritoProvider } from './context/carritoContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return(
    <BrowserRouter>
      <CarritoProvider>
          <NavBar/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}></Route> 
              <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
              <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='*' element={<Error/>}></Route>
            </Routes>
          </main>
      </CarritoProvider>
      <ToastContainer/>
    </BrowserRouter>
  )

}

export default App

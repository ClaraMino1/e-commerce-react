import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';
import { BrowserRouter,Route,Routes}   from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App

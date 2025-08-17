import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Route,Routes}   from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App

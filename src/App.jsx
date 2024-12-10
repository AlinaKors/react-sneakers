import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Purchases from './pages/Purchases';
import SneakersContext from './context';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 
const [isLoading, setIsLoading] = useState(false);

const checkEmpty = sneakers.some(product => product.isAdded);
const totalPrice = checkEmpty ? countTotal() : 0;

useEffect(() => {
  async function fetchData () {
    const {data} = await axios.get('https://ff4d43b0c6975608.mokky.dev/sneakers')
    setSneakers(data)
    setIsLoading(true);
  }
  fetchData();
}, []);

function countTotal ()  {
  let totalPrice;
  const sneakersAdd = sneakers.filter(product => product.isAdded);
  totalPrice = sneakersAdd.reduce((accumulator, product) => accumulator + product.price, 0);
  return totalPrice;
} 

const overlayView = () => {
  setCartView(true);
}

const updateStatus = (id, property) => {
  const newSneakers = [...sneakers];
  const product = newSneakers.find(item => item.id === id);
  product[property] = !product[property];
  setSneakers(newSneakers);
} 

const addingCart = (newSneakers) => {
  try{
    updateStatus(newSneakers.id, "isAdded");
    axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isAdded: true});
  }
  catch(error){
    console.log('Не удалось добавить продукт в корзину');
  }
  
}

const likeProduct = (newSneakers) => {
  try {
    updateStatus(newSneakers.id, "isFavourite");
    axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isFavourite: true});
  } catch (error) {
    console.log('Не удалось добавить продукт в избранное');
  }
}

const dislikeProduct = (deleteSneakers) => {
  try {
    updateStatus(deleteSneakers.id, "isFavourite");
    axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isFavourite: false});
  } catch (error) {
    console.log('Не удалось удалить продукт из избранного');
  }

}

const deleteCart = (deleteSneakers) => {
  try {
    updateStatus(deleteSneakers.id, "isAdded");
    axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isAdded: false});
  } catch (error) {
    console.log('Не удалось удалить продукт из корзины');
  }
}

  return ( 
    <SneakersContext.Provider value={{sneakers,
    deleteCart, 
    addingCart, 
    likeProduct, 
    dislikeProduct,
    totalPrice,}}>
      <div className="wrapper">     
        <Cart 
          cartView={cartView}
          setCartView={setCartView}
          checkEmpty={checkEmpty}
        />
        <Header 
          clickCart = {overlayView}
        />
        <Routes>
          <Route path='/' element={  
            <Home
            isLoading={isLoading}
          />}/>
          <Route path='/favourites' element={        
            <Favourites
            isLoading={isLoading}
          />}/>
          <Route path='/purchases' element={        
            <Purchases
            isLoading={isLoading}
          />}/>
        </Routes>
      </div> 
    </SneakersContext.Provider>
  );
}

export default App;

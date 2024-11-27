import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

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
  updateStatus(newSneakers.id, "isAdded");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isAdded: true});
}

const likeProduct = (newSneakers) => {
  updateStatus(newSneakers.id, "isFavourite");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isFavourite: true});
}

const dislikeProduct = (deleteSneakers) => {
  updateStatus(deleteSneakers.id, "isFavourite");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isFavourite: false});
}

const deleteCart = (deleteSneakers) => {
  updateStatus(deleteSneakers.id, "isAdded");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isAdded: false});
}

  return ( 
    
      <div className="wrapper">     
        <Cart 
          cartView={cartView}
          setCartView={setCartView}
          addSneakers={sneakers}
          onDeleteCart={deleteCart}
          totalPrice={totalPrice}
          checkEmpty={checkEmpty}
        />
        <Header 
          clickCart = {overlayView}
          totalPrice = {totalPrice}
        />
        <Routes>
          <Route path='/' element={  
            <Home
            sneakers={sneakers}
            deleteCart={deleteCart}
            addingCart={addingCart}
            likeProduct={likeProduct}
            dislikeProduct={dislikeProduct}
            isLoading={isLoading}
          />}/>
          <Route path='/favourites' element={        
            <Favourites
            sneakers={sneakers}
            deleteCart={deleteCart}
            addingCart={addingCart}
            likeProduct={likeProduct}
            dislikeProduct={dislikeProduct}
            isLoading={isLoading}
          />}/>
          <Route path='/'></Route>
        </Routes>
      </div> 
  );
}

export default App;

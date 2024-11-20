import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Products from './components/Products';
import Favourites from './components/Favourites';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 

const checkEmpty = sneakers.some(product => product.isAdded);
const totalPrice = checkEmpty ? countTotal() : 0;

useEffect(() => {axios.get('https://ff4d43b0c6975608.mokky.dev/sneakers')
.then(res => setSneakers(res.data))}, []);

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
            <Products
            sneakers={sneakers}
            updateStatus={updateStatus}
            deleteCart={deleteCart}
          />}/>
          <Route path='/favourites' element={        
            <Favourites
            sneakers={sneakers}
            updateStatus={updateStatus}
            deleteCart={deleteCart}
          />}/>
        </Routes>
      </div> 
  );
}

export default App;

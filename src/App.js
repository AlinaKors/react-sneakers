import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 
const [search, setSearch] = useState({isSearch: false, text: '', findSneakers: []});

const checkEmpty = sneakers.some(product => product.isAdded);
const sneakersCard = search.isSearch ? search.findSneakers : sneakers;
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

const addingCart = (newSneakers) => {
  updateStatus(newSneakers.id, "isAdded");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isAdded: true});
}

const deleteCart = (deleteSneakers) => {
  updateStatus(deleteSneakers.id, "isAdded");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isAdded: false});
}

const likeProduct = (newSneakers) => {
  updateStatus(newSneakers.id, "isFavourite");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${newSneakers.id}`, {isFavourite: true});
}

const dislikeProduct = (deleteSneakers) => {
  updateStatus(deleteSneakers.id, "isFavourite");
  axios.patch(`https://ff4d43b0c6975608.mokky.dev/sneakers/${deleteSneakers.id}`, {isFavourite: false});
}

const searchSneakers = (e) => {
  const value = e.target.value;
  const regex = new RegExp(value, 'i');
  (value !== '') ? 
  setSearch({isSearch: true,
      text: value,
      findSneakers: sneakers.filter(product => product.title.match(regex))})
  : clearSearch();
}

const clearSearch = () => {
  setSearch({isSearch: false, text: '', findSneakers: []})
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
        <main>
          {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
          <div className="containerTitle">
            {
              search.isSearch ? <h1>Поиск по запросу: <span>{search.text}</span></h1>
                : <h1>Все кроссовки</h1>
            }
            <div className="searchContainer">
              <img
                src="/img/search.svg"
                className="searchIcon"
                alt="icon search"
              />
              {search.isSearch && <img src="/img/close.svg" className="clearInput" alt="cleat input" onClick={clearSearch}></img>}
              <input className="search" placeholder="Поиск..." onChange={searchSneakers} value={search.text}></input>
            </div>
          </div>
          <div className="sneakersWrapper">
            <ul>
            {
              sneakersCard.map((item) => 
                <Card
                  key={item.id}
                  product={item}
                  onAddToCart={addingCart}
                  onDeleteCart={deleteCart}
                  onLikeProduct={likeProduct}
                  onDislikeProduct={dislikeProduct}
                />) 
              }
            </ul>
          </div>
        </main>
      
    </div>
  );
}

export default App;

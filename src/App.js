import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import CartEmpty from './components/CartEmpty';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 
const [addSneakers, setAddSneakers] = useState([]); 
const [search, setSearch] = useState({isSearch: false, text: '', findSneakers: []});

useEffect(() => {axios.get('https://ff4d43b0c6975608.mokky.dev/sneakers')
.then(res => setSneakers(res.data))}, []);

useEffect(() => {axios.get('https://ff4d43b0c6975608.mokky.dev/addedCart')
  .then(res => setAddSneakers(res.data))}, []);

// useEffect(() => reloadPage());

const overlayView = () => {
  setCartView(true);
}

const updateStatus = (id) => {
  const newSneakers = [...sneakers];
  const product = newSneakers.find(item => item.id === id);
  product.isAdded = !product.isAdded;
  setSneakers(newSneakers);
} 

const addingCart = (newSneakers) => {
  updateStatus(newSneakers.id);
  axios.post('https://ff4d43b0c6975608.mokky.dev/addedCart', {...newSneakers, id: newSneakers.id - 1});
}

const deleteCart = (deleteSneakers) => {
  updateStatus(deleteSneakers.id);
  axios.delete(`https://ff4d43b0c6975608.mokky.dev/addedCart/${deleteSneakers.id}`);
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

const countTotal = () => {
  let totalPrice;
  const sneakersAdd = sneakers.filter(product => product.isAdded);
  totalPrice = sneakersAdd.reduce((accumulator, product) => accumulator + product.price, 0);
  return totalPrice;
}

// const reloadPage = () => {
//   const newSneakers = [...sneakers];
//   addSneakers.map(item => newSneakers.filter(product => product.id === item.id).isAdded = true);
//   setSneakers(newSneakers);
// }

const checkEmpty = sneakers.find(product => product.isAdded);
const sneakersCard = search.isSearch ? search.findSneakers : sneakers;
const totalPrice = checkEmpty ? countTotal() : 0;


  return (
    <div className="wrapper">
        {checkEmpty ?         
         <Cart 
          cartView={cartView}
          setCartView={setCartView}
          addSneakers={sneakers}
          deleteCart={deleteCart}
          totalPrice={totalPrice}
        /> : <CartEmpty
          cartView={cartView}
          setCartView={setCartView}
        />}
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
                  addingCart={addingCart}
                  deleteCart={deleteCart}
                />) 
              }
            </ul>
          </div>
        </main>
      
    </div>
  );
}

export default App;

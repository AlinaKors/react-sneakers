import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import CartEmpty from './components/CartEmpty';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 
const [cartSneakers, setCartSneakers] = useState([]);
const [search, setSearch] = useState({isSearch: false, text: '', findSneakers: []});

useEffect(() => {fetch('https://66b4e09a9f9169621ea4b1d9.mockapi.io/products')
.then(res => res.json())
.then(rezult => setSneakers(rezult))}, []);

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
  setCartSneakers([...cartSneakers, newSneakers]);
  updateStatus(newSneakers.id);
}

const deleteCart = (deleteSneakers) => {
  setCartSneakers(cartSneakers.filter(product => product.id !== deleteSneakers.id));
  updateStatus(deleteSneakers.id);
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


const checkEmpty = cartSneakers.length !== 0;
const totalPrice = !checkEmpty ? 0 :
 cartSneakers.reduce((accumulator, product) => accumulator + parseInt(product.price), 0);

  return (
    <div className="wrapper">
        {checkEmpty ?         
         <Cart 
          cartView={cartView}
          setCartView={setCartView}
          addSneakers={cartSneakers}
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
              search.isSearch ? search.findSneakers.map((item) => 
                <Card
                  key={item.id}
                  product={item}
                  addingCart={addingCart}
                  deleteCart={deleteCart}
                />) 
                : sneakers.map((item) => 
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

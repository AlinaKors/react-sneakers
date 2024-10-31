import Header from './components/Header';
import Cart from './components/Cart';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
const [cartView, setCartView] = useState(false);
const [sneakers, setSneakers] = useState([]); 
const [cartSneakers, setCartSneakers] = useState([]);

useEffect(() => {fetch('https://66b4e09a9f9169621ea4b1d9.mockapi.io/products')
.then(res => res.json())
.then(rezult => setSneakers(rezult))}, []);

const overlayView = () => {
  setCartView(true);
}

const addingCart = (newSneakers) => {
  setCartSneakers([...cartSneakers, newSneakers]);
}

const deleteCart = (deleteSneakers) => {
  setCartSneakers(cartSneakers.filter(product => product.id !== deleteSneakers.id));
}

const changeCart = (product, addProduct) => {
  addProduct ? deleteCart(product) : addingCart(product);
}

  return (
    <div className="wrapper">
      <Cart 
        cartView={cartView}
        setCartView={setCartView}
        addSneakers={cartSneakers}
        deleteCart={deleteCart}
      />
      <Header 
        clickCart = {overlayView}
      />
      <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className="containerTitle">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img
              src="/img/search.svg"
              className="searchIcon"
              alt="icon search"
            />
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakersWrapper">
          <ul>
           {
            sneakers.map((item) => 
              <Card
                key={item.id}
                product={item}
                changeCart={changeCart}
              />
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

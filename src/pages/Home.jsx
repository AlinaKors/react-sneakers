import Card from '../components/Card';
import { useState } from 'react';

export default function Home({
  sneakers,
  deleteCart, 
  addingCart,  
  likeProduct,
  dislikeProduct,
  isLoading}) {
    
const [search, setSearch] = useState({isSearch: false, text: '', findSneakers: []});
const sneakersCard = search.isSearch ? search.findSneakers : sneakers;
  
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

const checkLoading = isLoading ? sneakersCard : [...Array(10)];

    return(
        <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className='containerTitle'>
          {
            search.isSearch ? <h1>Поиск по запросу: <span>{search.text}</span></h1>
              : <h1>Все кроссовки</h1>
          }
          <div className='searchContainer'>
            <img
              src="/img/search.svg"
              className="searchIcon"
              alt="icon search"
            />
            {search.isSearch && <img src="/img/close.svg" className='clearInput' alt="cleat input" onClick={clearSearch}></img>}
            <input className="search" placeholder="Поиск..." onChange={searchSneakers} value={search.text}></input>
          </div>
        </div>
        <div className='sneakersWrapper'>
          <ul>
          {
            checkLoading.map((item, index) => 
              <Card
                key={isLoading ? item.id : index}
                product={item}
                onAddToCart={addingCart}
                onDeleteCart={deleteCart}
                onLikeProduct={likeProduct}
                onDislikeProduct={dislikeProduct}
                isLoading={isLoading}
              />) 
            }
          </ul>
        </div>
      </main>
    );
}
import Card from '../Card';
import { useState } from 'react';
import axios from 'axios';
import styles from "./Products.module.scss";

export default function Products({sneakers, updateStatus, deleteCart}) {
const [search, setSearch] = useState({isSearch: false, text: '', findSneakers: []});
const sneakersCard = search.isSearch ? search.findSneakers : sneakers;

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



    return(
        <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className={styles.containerTitle}>
          {
            search.isSearch ? <h1>Поиск по запросу: <span>{search.text}</span></h1>
              : <h1>Все кроссовки</h1>
          }
          <div className={styles.searchContainer}>
            <img
              src="/img/search.svg"
              className="searchIcon"
              alt="icon search"
            />
            {search.isSearch && <img src="/img/close.svg" className={styles.clearInput} alt="cleat input" onClick={clearSearch}></img>}
            <input className="search" placeholder="Поиск..." onChange={searchSneakers} value={search.text}></input>
          </div>
        </div>
        <div className={styles.sneakersWrapper}>
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
    );
}
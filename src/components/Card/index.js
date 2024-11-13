import styles from './Card.module.scss';
import { useState } from 'react';

export default function Card({product, addingCart, deleteCart}) {
const [addFavorite, setFavorite] = useState(false);

  const changeFavorite = () => {
    setFavorite(!addFavorite);
  }

  const changeCart = (product) => {
    product.isAdded ? deleteCart(product) : addingCart(product);
  }

    return(
        <li className={styles.card}>
            <img
                src={addFavorite ? "/img/addingFavorite.svg" : "/img/favorite.svg"}
                className={styles.favoriteIcon}
                alt="favorite icon"
                onClick={changeFavorite}
              />
              <img
                src={product.src}
                className={styles.cardImg}
                alt={product.title}
              />
              <h2>
                {product.title}
              </h2>
              <div className={styles.addCartContainer}>
                <div className={styles.price}>
                  <span>Цена:</span>
                  <strong>{parseInt(product.price).toLocaleString('ru-RU')} руб.</strong>
                </div>
                  <button className={product.isAdded ? styles.addedCartBtn : ''} onClick={() => {changeCart(product)}}>
                    <img
                      src={product.isAdded ? "img/addedToCart.svg" : "img/addToCart.svg"}
                      alt="add cart"
                    />
                  </button>
            </div>
        </li>
    );
}
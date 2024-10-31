import styles from './Card.module.scss';
import { useState } from 'react';

export default function Card({product, changeCart}) {
  const [addFavorite, setFavorite] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  const changeFavorite = () => {
    setFavorite(!addFavorite);
  }

  const changeAdding = () => {
    setAddProduct(!addProduct);
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
                  <strong>{product.price}</strong>
                </div>
                <button className={addProduct ? styles.addedCartBtn : ''} onClick={() => { changeAdding(); changeCart(product, addProduct)}}>
                  <img
                    src={addProduct ? "img/addedToCart.svg" : "img/addToCart.svg"}
                    alt="add cart"
                  />
                </button>
            </div>
        </li>
    );
}
import styles from './Card.module.scss';
import { useState } from 'react';

export default function Card({name, src, price}) {
  const [addProduct, setAddProduct] = useState(false);
  const [addFavorite, setFavorite] = useState(false);

  const addingProduct = () => {
    setAddProduct(!addProduct);
  }

  const addingFavorite = () => {
    setFavorite(!addFavorite);
  }

    return(
        <li className={styles.card}>
            <img
                src={addFavorite ? "/img/addingFavorite.svg" : "/img/favorite.svg"}
                className={styles.favoriteIcon}
                alt="favorite icon"
                onClick={() => addingFavorite()}
              />
              <img
                src={src}
                className={styles.cardImg}
                alt={name}
              />
              <h2>
                {name}
              </h2>
              <div className={styles.addCartContainer}>
                <div className={styles.price}>
                  <span>Цена:</span>
                  <strong>{price}</strong>
                </div>
                <button className={addProduct ? styles.addedCartBtn : ''} onClick={() => addingProduct()}>
                  <img
                    src={addProduct ? "img/addedToCart.svg" : "img/addToCart.svg"}
                    alt="add cart"
                  />
                </button>
            </div>
        </li>
    );
}
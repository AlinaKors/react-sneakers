import styles from './Card.module.scss';
import { useState } from 'react';

export default function Card({title, src, price}) {
  const [addProduct, setAddProduct] = useState(false);

  const addingProduct = () => {
    setAddProduct(!addProduct);
  }

    return(
        <li className={styles.card}>
            <img
                src="/img/favorite.svg"
                className={styles.favoriteIcon}
                alt="favorite icon"
              />
              <img
                src={src}
                className={styles.cardImg}
                alt={title}
              />
              <h2>
                {title}
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
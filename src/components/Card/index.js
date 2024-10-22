import styles from './Card.module.scss';

export default function Card() {
    return(
        <li className={styles.card}>
            <img
                src="/img/favorite.svg"
                className={styles.favoriteIcon}
                alt="favorite icon"
              />
              <img
                src="/img/sneakers/sneakers1.png"
                className={styles.cardImg}
                alt="Мужские Кроссовки Nike Blazer Mid Suede"
              />
              <h2>
                Мужские Кроссовки Nike Blazer Mid Suede
              </h2>
              <div className={styles.addCartContainer}>
                <div className={styles.price}>
                  <span>Цена:</span>
                  <strong>12 999 руб.</strong>
                </div>
                <button>
                  <img
                    src="img/addedToCart.svg"
                    className={styles.addIcon}
                    alt="add cart"
                  />
                </button>
            </div>
        </li>
    );
}
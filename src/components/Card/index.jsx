import styles from './Card.module.scss';

export default function Card({product, onAddToCart, onDeleteCart, onLikeProduct, onDislikeProduct}) {

  const changeFavorite = () => {
    product.isFavourite ? onDislikeProduct(product) : onLikeProduct(product);
  }

  const changeCart = (product) => {
    product.isAdded ? onDeleteCart(product) : onAddToCart(product);
  }

    return(
        <li className={styles.card}>
            <img
                src={product.isFavourite ? "/img/addingFavorite.svg" : "/img/favorite.svg"}
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
                  <strong>{product.price.toLocaleString('ru-RU')} руб.</strong>
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
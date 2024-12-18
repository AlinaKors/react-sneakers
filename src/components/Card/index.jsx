import { Fragment } from "react";
import styles from "./Card.module.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export default function Card({
  product,
  onAddToCart,
  onDeleteCart,
  onLikeProduct,
  onDislikeProduct,
  isLoading,
}) {
  const changeFavorite = () => {
    product.isFavourite ? onDislikeProduct(product) : onLikeProduct(product);
  };

  const changeCart = (product) => {
    product.isAdded ? onDeleteCart(product) : onAddToCart(product);
  };

  return (
    <li className={styles.card}>
      {isLoading ? (
        <Fragment>
          <img
            src={
              product.isFavourite
                ? "/img/addingFavorite.svg"
                : "/img/favorite.svg"
            }
            className={styles.favoriteIcon}
            alt="favorite icon"
            onClick={changeFavorite}
          />
          <img
            src={product.src}
            className={styles.cardImg}
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <div className={styles.addCartContainer}>
            <div className={styles.price}>
              <span>Цена:</span>
              <strong>{product.price.toLocaleString("ru-RU")} руб.</strong>
            </div>
            <button
              className={product.isAdded ? styles.addedCartBtn : ""}
              onClick={() => {
                changeCart(product);
              }}
            >
              <img
                src={
                  product.isAdded ? "img/addedToCart.svg" : "img/addToCart.svg"
                }
                alt="add cart"
              />
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Skeleton variant="rect" width={150} height={90} />
          <Skeleton variant="text" sx={{ fontSize: '14px' }} className={styles.skeletonBox}/>
          <Skeleton variant="text" sx={{ fontSize: '11px' }} width={90}/>
          <div className={styles.skeletonContainer}>
            <Skeleton variant="rect"  width={80} height={24}/>
            <Skeleton variant="rect"  width={32} height={32}/>
          </div>
        </Fragment>
      )}
    </li>
  );
}

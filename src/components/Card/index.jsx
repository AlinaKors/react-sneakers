import { Fragment } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import Skeleton from 'react-loading-skeleton'


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
        <Skeleton variant="rect" width={210} height={118} />
        // <ContentLoader
        //   speed={1}
        //   width={150}
        //   height={192}
        //   viewBox="0 0 150 192"
        //   backgroundColor="#f3f3f3"
        //   foregroundColor="#ecebeb"
        // >
        //   <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
        //   <rect x="36" y="39" rx="0" ry="0" width="1" height="0" />
        //   <rect x="-1" y="106" rx="10" ry="10" width="150" height="15" />
        //   <rect x="0" y="126" rx="10" ry="10" width="93" height="15" />
        //   <rect x="0" y="164" rx="10" ry="10" width="80" height="24" />
        //   <rect x="115" y="158" rx="10" ry="10" width="32" height="32" />
        // </ContentLoader>
      )}
    </li>
  );
}

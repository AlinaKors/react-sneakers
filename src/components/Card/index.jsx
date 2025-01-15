import { Fragment } from "react";
import styles from "./Card.module.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useContext, useState, useEffect } from 'react';
import SneakersContext from '../../context';


export default function Card({
  product,
  isLoading,
}) {

  const page = window.location.pathname === '/purchases';

  const {deleteCart, addingCart, dislikeProduct, likeProduct} = useContext(SneakersContext);

  const changeFavorite = () => {
    product.isFavourite ? dislikeProduct(product) : likeProduct(product);
  };

  const changeCart = (product) => {
    product.isAdded ? deleteCart(product) : addingCart(product);
  };

  return (
    <li className={styles.card}>
      {isLoading ? (
        <Fragment>
          <img
            src={
              product.isFavourite
                ? "img/addingFavorite.svg"
                : "img/favorite.svg"
            }
            className={page ? styles.none : styles.favoriteIcon}
            alt="favorite icon"
            onClick={changeFavorite}
          />
          <img
            src={product.src}
            className={styles.cardImg}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <div className={styles.addCartContainer}>
            <div className={styles.price}>
              <span>Цена:</span>
              <strong>{product.price.toLocaleString("ru-RU")} руб.</strong>
            </div>
            <button
              className={page ? styles.none : product.isAdded ? styles.addedCartBtn : ""}
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

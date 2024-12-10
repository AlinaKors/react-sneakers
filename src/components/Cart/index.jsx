import CartItem from "../CartItem";
import styles from "./Cart.module.scss";
import { useContext, useState } from 'react';
import SneakersContext from '../../context';


export default function Cart({
  cartView,
  setCartView,
  checkEmpty
}) {
  
  const {sneakers, deleteCart, totalPrice} = useContext(SneakersContext);

  const closeCart = () => {
    setCartView(false);
  };

  const [isComplete, setIsComplete] = useState(false);

  const charge = (totalPrice * 5) / 100; 
  console.log(isComplete);

  return (
    <div className={cartView ? "overlay" : "overlay overlayHidden"}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTitle}>
          <span>Корзина</span>
          {checkEmpty && <img
            src="/img/close.svg"
            className="closeIcon"
            alt="close cart"
            onClick={closeCart}
          ></img>}
        </div>
        { !checkEmpty ? (
          <div className={styles.centerBlock}>
            <img src="/img/emptyCart.png" alt="Пустая корзина"></img>
            <span>Корзина пустая</span>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className={styles.btnBack} onClick={closeCart}>
              Вернуться назад
              <img src="/img/next.svg" alt="back arrow" />
            </button>
          </div>
        ) : (
          isComplete ?           
          (<div className={styles.centerBlock}>
          <img src="/img/completeOrder.png" alt="Заказ оформлен"></img>
          <span>Заказ оформлен!</span>
          <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
          <button className={styles.btnBack} onClick={() => {closeCart(); setIsComplete(false);}}>
            Вернуться назад
            <img src="/img/next.svg" alt="back arrow" />
          </button>
        </div>) :
          (<div className={styles.cartBlock}>
            <ul>
              {sneakers.map(
                (item) =>
                  item.isAdded && (
                    <CartItem
                      key={item.id}
                      product={item}
                      deleteCart={deleteCart}
                    />
                  )
              )}
            </ul>
            <div className={styles.cartTotal}>
              <div className={styles.charge}>
                <span>Налог 5%:</span>
                <div></div>
                <strong>{parseInt(charge).toLocaleString("ru-RU")} руб.</strong>
              </div>
              <div className={styles.total}>
                <span>Итого:</span>
                <div></div>
                <strong>
                  {parseInt(charge + totalPrice).toLocaleString("ru-RU")} руб.
                </strong>
              </div>
              <button className={styles.placeOrder} onClick={() => setIsComplete(true)}>
                Оформить заказ
                <img src="/img/next.svg" alt="next arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

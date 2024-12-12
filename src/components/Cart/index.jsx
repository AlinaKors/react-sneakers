import CartItem from "../CartItem";
import styles from "./Cart.module.scss";
import { useContext, useState } from 'react';
import SneakersContext from '../../context';
import axios from 'axios';
import Info from '../Info';

export default function Cart({
  cartView,
  checkEmpty
}) {
  
  const {sneakers, deleteCart, totalPrice, closeCart} = useContext(SneakersContext);

  const sneakersAdded = sneakers.filter(product => product.isAdded);

  const addOrders = () => {
    setIsComplete(true)
    axios.post(`https://ff4d43b0c6975608.mokky.dev/orders`, sneakersAdded);
    sneakersAdded.map(product => deleteCart(product));
  }

  const [isComplete, setIsComplete] = useState(false);

  const charge = (totalPrice * 5) / 100; 

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
        { !checkEmpty ? !isComplete ? 
          (<Info 
          title={'Корзина пустая'}
          description={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          imgSrc={'/img/emptyCart.png'}
          alt={'Пустая коробка'}/>) : (
          <Info 
          title={'Заказ оформлен!'}
          description={'Ваш заказ #18 скоро будет передан курьерской доставке'}
          imgSrc={'/img/completeOrder.png'}
          alt={'Успешный заказ'}/>
        ) : ( 
          (<div className={styles.cartBlock}>
            <ul>
              {sneakersAdded.map(
                (item) =>
                    <CartItem
                      key={item.id}
                      product={item}
                      deleteCart={deleteCart}
                    />
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
              <button className={styles.placeOrder} onClick={addOrders}>
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

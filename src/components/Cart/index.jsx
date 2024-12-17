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
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderIds] = useState();

  const sneakersAdded = sneakers.filter(product => product.isAdded);

  const addOrders = async  () => {
    try{
      setIsLoading(true);
      setIsComplete(true);
      const {data} = await axios.post(`https://ff4d43b0c6975608.mokky.dev/orders`, {
        order: sneakersAdded,
      });
      setOrderIds(data.id);
      sneakersAdded.map(product => deleteCart(product));
    } catch {
      console.log("Не удалось создать заказ :c")
    }
    setIsLoading(false);
  }

  const closeOrder = () => {
    closeCart();
    setTimeout(() => setIsComplete(false), 100);
  }

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
          alt={'Пустая коробка'}
          closeCart={closeCart}/>) : (
          <Info 
          title={'Заказ оформлен!'}
          description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
          imgSrc={'/img/completeOrder.png'}
          alt={'Успешный заказ'}
          closeCart={closeOrder}/>
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
              <button disabled={isLoading} className={styles.placeOrder} onClick={addOrders}>
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

import CartItem from '../CartItem';
import styles from './Cart.module.scss';

export default function Cart({cartView, setCartView, addSneakers, deleteCart, totalPrice}) {
  
  const closeCart = () => {
    setCartView(false);
  }

  const charge = totalPrice * 5 / 100;

    return(
        <div className={cartView ? "overlay" : "overlay overlayHidden"}>
        <div className={styles.cartContainer}>
          <div className={styles.cartTitle}>
            <span>Корзина</span>
            <img
              src="/img/close.svg"
              className="closeIcon"
              alt="close cart"
              onClick={closeCart}
            ></img>
          </div>
          <ul>
            {addSneakers.map((item) => 
            <CartItem 
            key={item.id}
            product={item}
            deleteCart={deleteCart}
            />)}
          </ul>
          <div className={styles.cartTotal}>
            <div className={styles.charge}>
              <span>Налог 5%:</span>
              <div></div>
              <strong>{parseInt(charge).toLocaleString('ru-RU')} руб.</strong>
            </div>
            <div className={styles.total}>
              <span>Итого:</span>
              <div></div>
              <strong>{parseInt(charge + totalPrice).toLocaleString('ru-RU')} руб.</strong>
            </div>
            <a>
              Оформить заказ
              <img
                src="/img/next.svg"
                alt="next arrow"
              />
            </a>
          </div>
        </div>
      </div>
    );
}
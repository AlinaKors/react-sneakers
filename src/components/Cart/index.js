import CartItem from '../CartItem';
import styles from './Cart.module.scss';

export default function Cart({cartView, setCartView}) {
  const closeCart = () => {
    setCartView(false);
  }

    return(
        <div className={cartView ? "overlay" : "overlay overlayHidden"}>
        <div className={styles.cartContainer}>
          <div className={styles.cartTitle}>
            <span>Корзина</span>
            <img
              src="/img/close.svg"
              className="closeIcon"
              alt="close cart"
              onClick={() => closeCart()}
            ></img>
          </div>
          <ul>
            <CartItem />
          </ul>
          <div className={styles.cartTotal}>
            <div className={styles.total}>
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </div>
            <div className={styles.charge}>
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </div>
            <a>
              Оформить заказ
              <img
                src="/img/next.svg"
                className="orderArrow"
                alt="next arrow"
              />
            </a>
          </div>
        </div>
      </div>
    );
}
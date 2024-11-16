import CartItem from "../CartItem";
import styles from "./Cart.module.scss";

export default function Cart({
  cartView,
  setCartView,
  addSneakers,
  onDeleteCart,
  totalPrice,
  checkEmpty
}) {
  const closeCart = () => {
    setCartView(false);
  };

  const charge = (totalPrice * 5) / 100;
  console.log(checkEmpty);

  return (
    <div className={cartView ? "overlay" : "overlay overlayHidden"}>
      <div className={styles.cartContainer}>
        <div className={styles.cartTitle}>
          <span>Корзина</span>
          {!checkEmpty && <img
            src="/img/close.svg"
            className="closeIcon"
            alt="close cart"
            onClick={closeCart}
          ></img>}
        </div>
        { checkEmpty ? (
          <div className={styles.centerBlock}>
            <img src="/img/emptyCart.png" alt="Пустая корзина/empty cart"></img>
            <span>Корзина пустая</span>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="btnBack" onClick={closeCart}>
              Вернуться назад
              <img src="/img/next.svg" alt="back arrow" />
            </button>
          </div>
        ) : (
          <div className={styles.cartBlock}>
            <ul>
              {addSneakers.map(
                (item) =>
                  item.isAdded && (
                    <CartItem
                      key={item.id}
                      product={item}
                      deleteCart={onDeleteCart}
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
              <a>
                Оформить заказ
                <img src="/img/next.svg" alt="next arrow" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

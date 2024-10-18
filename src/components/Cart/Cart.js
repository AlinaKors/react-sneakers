import CartItem from '../CartItem/CartItem';

export default function Cart() {
    return(
        <div className="overlay overlayHidden">
        <div className="cartContainer">
          <div className="cartTitle">
            <span>Корзина</span>
            <img
              src="/img/close.svg"
              className="closeIcon"
              alt="close cart"
            ></img>
          </div>
          <ul>
            <CartItem />
          </ul>
          <div className="cartTotal">
            <div className="total">
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </div>
            <div className="charge">
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </div>
            <a className="placeOrder">
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
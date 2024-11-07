import styles from './CartEmpty.module.scss';

export default function CartEmpty({cartView, setCartView}) {

    const closeCart = () => {
        setCartView(false);
    }
    
    return(
        <div className={cartView ? "overlay" : "overlay overlayHidden"}>
        <div className={styles.cartContainer}>
          <div className={styles.cartTitle}>
            <span>Корзина</span>
          </div>
          <div className={styles.centerBlock}>
            <img src='/img/emptyCart.png'
                alt='Пустая корзина/empty cart'></img>
            <span>Корзина пустая</span>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className='btnBack' onClick={closeCart}>
                {/* <img
                    src="/img/next.svg"
                    className="orderArrow"
                    alt="next arrow"
                /> */}
                Вернуться назад
                <img
                    src="/img/next.svg"
                    alt="back arrow"
                />
            </button>
          </div>
        </div>
      </div>
    );
}
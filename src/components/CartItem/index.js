import styles from './CartItem.module.scss';

export default function CartItem() {
    return(
        <li className={styles.cartItem}>
              <img
                src="/img/sneakers/sneakers1mini.png"
                alt="Мужские Кроссовки Nike Blazer Mid Suede"
              />
              <div className={styles.descriptionItem}>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className={styles.price}>
                  <strong>21 999 руб.</strong>
                  <img
                    src="/img/deletecart.svg"
                    className="deleteIcon"
                    alt="delete cart"
                  />
                </div>
              </div>
            </li>
    );
}
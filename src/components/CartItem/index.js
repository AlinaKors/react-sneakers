import styles from './CartItem.module.scss';

export default function CartItem({product, deleteCart}) {
    return(
        <li className={styles.cartItem}>
              <img
                src={product.src}
                alt={product.title}
              />
              <div className={styles.descriptionItem}>
                <p>{product.title}</p>
                <div className={styles.price}>
                  <strong>{product.price.toLocaleString('ru-RU')} руб.</strong>
                  <img
                    src="/img/deletecart.svg"
                    className="deleteIcon"
                    alt="delete cart"
                    onClick={() => {deleteCart(product)}}
                  />
                </div>
              </div>
            </li>
    );
}
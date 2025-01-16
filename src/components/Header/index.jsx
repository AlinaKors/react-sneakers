import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import {useCart} from '../../hooks/useCart';

export default function Header({clickCart}) {
  const {totalPrice} = useCart();
    return(
        <header>
          <Link to='/'>
            <div className={styles.headerLeft}>
              <img
                height="40"
                width="40"
                src="img/logo.png"
                alt="logo shop"
              />
              <div>
                <span>React Sneakers</span>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
          </ Link>  
        <nav>
          <ul>
            <li className={styles.cart} onClick={clickCart}>
              <a>
                <img src="img/cart.svg" className="cartIcon" alt="icon cart" />
                <span>{totalPrice} руб.</span>
              </a>
            </li>
            <li className="bookmarks">
              <Link to='favourites'>
                <img
                  src="img/bookmarks.svg"
                  className="bookmarksIcon"
                  alt="icon bookmarks"
                />
                <span>Закладки</span>
              </Link>
            </li>
            <li className="profile">
              <Link to='purchases'>
                <img
                  src="img/profile.svg"
                  className="profileIcon"
                  alt="icon profile"
                />
                <span>Покупки</span>
              </ Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
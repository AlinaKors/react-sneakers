import styles from './Header.module.scss';

export default function Header({clickCart}) {
    return(
        <header>
        <div className={styles.headerLeft}>
          <img
            height="40"
            width="40"
            src="/img/logo.png"
            alt="logo shop"
          />
          <div>
            <span>React Sneakers</span>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className={styles.cart} onClick={clickCart}>
              <a href="#">
                <img src="/img/cart.svg" className="cartIcon" alt="icon cart" />
                <span>1205 руб.</span>
              </a>
            </li>
            <li className="bookmarks">
              <a>
                <img
                  src="/img/bookmarks.svg"
                  className="bookmarksIcon"
                  alt="icon bookmarks"
                />
                <span>Закладки</span>
              </a>
            </li>
            <li className="profile">
              <a>
                <img
                  src="/img/profile.svg"
                  className="profileIcon"
                  alt="icon profile"
                />
                <span>Профиль</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}
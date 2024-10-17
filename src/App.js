function App() {
  return (
      <div className="wrapper">
        <header>
            <div className="headerLeft">
                <img height="40" width="40" src="/img/logo.png" className="headerLogo" alt="logo shop" />
                <div className="headerInfo">
                <span>React Sneakers</span>
                <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="cart">
                    <a href="#">
                        <img src="/img/cart.svg" className="cartIcon" alt="icon cart" />
                        <span>1205 руб.</span>
                    </a>
                    </li>
                    <li className="bookmarks">
                    <a> 
                        <img src="/img/bookmarks.svg" className="bookmarksIcon" alt="icon bookmarks" />
                        <span>Закладки</span>
                    </a>
                    </li>
                    <li className="profile">
                    <a>
                        <img src="/img/profile.svg" className="profileIcon" alt="icon profile" />
                        <span>Профиль</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </header>
      <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className="containerTitle">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img src="/img/search.svg" className="searchIcon" alt="icon search" />
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakersWrapper">
          <ul>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
              <li className="card">
                <img src="/img/favorite.svg" className="favoriteIcon" alt="favorite icon" />
                <img src="/img/sneakers/sneakers1.png" className="cardImg" alt="Мужские Кроссовки Nike Blazer Mid Suede" />
                <h2 className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                <div className="addCartContainer">
                  <div className="price">
                    <span>Цена:</span>
                    <strong>12 999 руб.</strong>
                  </div>
                  <button className="addCartBtn">
                    <img src="img/addedToCart.svg" className="addIcon" alt="add cart" />
                  </button>
                </div>
              </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

export default function Card() {
    return(
        <li className="card">
            <img
                src="/img/favorite.svg"
                className="favoriteIcon"
                alt="favorite icon"
              />
              <img
                src="/img/sneakers/sneakers1.png"
                className="cardImg"
                alt="Мужские Кроссовки Nike Blazer Mid Suede"
              />
              <h2 className="nameSneakers">
                Мужские Кроссовки Nike Blazer Mid Suede
              </h2>
              <div className="addCartContainer">
                <div className="price">
                  <span>Цена:</span>
                  <strong>12 999 руб.</strong>
                </div>
                <button className="addCartBtn">
                  <img
                    src="img/addedToCart.svg"
                    className="addIcon"
                    alt="add cart"
                  />
                </button>
            </div>
        </li>
    );
}
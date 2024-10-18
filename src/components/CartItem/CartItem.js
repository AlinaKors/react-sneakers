export default function CartItem() {
    return(
        <li className="cartItem">
              <img
                src="/img/sneakers/sneakers1mini.png"
                className="cartImg"
                alt="Мужские Кроссовки Nike Blazer Mid Suede"
              />
              <div className="descriptionItem">
                <p className="nameSneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="price">
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
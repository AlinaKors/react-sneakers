import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <main>
        {/* <img src="/img/banner.png" className="banners" alt="banner 1" /> */}
        <div className="containerTitle">
          <h1>Все кроссовки</h1>
          <div className="searchContainer">
            <img
              src="/img/search.svg"
              className="searchIcon"
              alt="icon search"
            />
            <input className="search" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakersWrapper">
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

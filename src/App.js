import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="content__search">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__product">
          <Card />
          <div className="content__card">
            <img className="content__img" src="/img/sneakers/02.jpg" width={133} height={112} alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content__card-bottom">
              <div className="content__card-price">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img src="/img/plus.svg" width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
          <div className="content__card">
            <img className="content__img" src="/img/sneakers/03.jpg" width={133} height={112} alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content__card-bottom">
              <div className="content__card-price">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img src="/img/plus.svg" width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
          <div className="content__card">
            <img className="content__img" src="/img/sneakers/04.jpg" width={133} height={112} alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="content__card-bottom">
              <div className="content__card-price">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img src="/img/plus.svg" width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;

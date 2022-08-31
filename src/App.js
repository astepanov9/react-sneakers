import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import AppContext from './context';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62fbe803e4bcaf53518f41a8.mockapi.io/cart');
      const favoriteResponse = await axios.get('https://62fbe803e4bcaf53518f41a8.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://62fbe803e4bcaf53518f41a8.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemsResponse.data);
    };
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62fbe803e4bcaf53518f41a8.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62fbe803e4bcaf53518f41a8.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    };
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62fbe803e4bcaf53518f41a8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      axios.delete(`https://62fbe803e4bcaf53518f41a8.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      const { data } = await axios.post('https://62fbe803e4bcaf53518f41a8.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    };
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems }}>
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }>
          </Route>
          <Route
            path="/favorites"
            exact
            element={
              <Favorites
                onAddToFavorite={onAddToFavorite}
              />
            }>
          </Route>
          <Route
            path="/orders"
            exact
            element={
              <Orders />
            }>
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;

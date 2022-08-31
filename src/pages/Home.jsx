import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Home({
    items,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {

    const { isItemAdded } = React.useContext(AppContext);

    const renderItems = () => {
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue));
        return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added={isItemAdded(item && item.id)}
                loading={isLoading}
                {...item}
            />
        ))
    };

    return (
        <div className="content">
            <div className="content__top">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="content__search">
                    <img src="/img/search.svg" alt="search" />
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="content__product">
                {renderItems()}
            </div>
        </div>
    );
};

export default Home;
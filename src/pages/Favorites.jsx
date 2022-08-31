import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites({ onAddToFavorite }) {

    const { favorites } = React.useContext(AppContext);

    return (
        <div className="content">
            <div className="content__top">
                <h1>Мои закладки</h1>
            </div>
            <div className="content__product">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
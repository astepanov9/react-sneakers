import React from 'react'
import AppContext from '../context';

const Info = ({ image, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <div className="drawer__empty">
            <img className="drawer__empty-img" src={image} height={120} width={120} alt="cart-clear" />
            <h3>{title}</h3>
            <p className="drawer__empty-subtitle">{description}</p>
            <button className="greenButton" onClick={() => setCartOpened(false)}>Вернуться назад <img src="/img/arrow.svg" alt="arrow" /></button>
        </div>
    )
}

export default Info;

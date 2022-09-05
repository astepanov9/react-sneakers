import React from 'react'
import axios from 'axios';
import Info from './Info';
import { useCart } from '../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const nalog = totalPrice / 100 * 5;

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62fbe803e4bcaf53518f41a8.mockapi.io/orders', {
                items: cartItems,
            });
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62fbe803e4bcaf53518f41a8.mockapi.io/cart/' + item.id);
                await delay(1000);
            };

        } catch (error) {
            alert('Не удалось создать заказ :(')
        }
        setIsLoading(false);
    };

    return (
        <div className={`drawer ${opened ? 'drawer__visible' : ''}`}>
            <div className="drawer__body">
                <h2>Корзина <img onClick={onClose} className="drawer__close" src="/img/close.svg" alt="remote" /></h2>
                {items.length > 0 ? (
                    <div className="drawer__wrapper">
                        <div className="drawer__list">
                            {items.map((obj) => (
                                <div key={obj.id} className="drawer__item">
                                    <img className="drawer__item-img" width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                                    <div className="drawer__item-desc">
                                        <p>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img className="drawer__item-remove" src="/img/btn-remote-hover.svg" alt="remote" onClick={() => onRemove(obj.id)} />
                                </div>
                            ))}
                        </div>
                        <div className="drawer__bottom">
                            <ul className="drawer__bottom-list">
                                <li className="drawer__bottom-item">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li className="drawer__bottom-item">
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{nalog} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? <div className='greenColor'>Заказ оформлен</div> : "Корзина пустая"}
                        description={isOrderComplete ? `Спасибо! Ваш заказ №${orderId} оформлен.` : "Добавьте хотя бы одну пару кроссовок, что бы сделать заказ."}
                        image={isOrderComplete ? "img/order-complete.jpg" : "/img/cart-clear.png"}
                    />
                )}
            </div>
        </div>
    )
};

export default Drawer;
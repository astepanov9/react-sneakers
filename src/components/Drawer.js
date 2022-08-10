function Drawer() {
    return (
        <div className="drawer" style={{ display: 'none' }}>
            <div className="drawer__body">
                <h2>Корзина <img className="drawer__close" src="/img/close.svg" alt="remote" /></h2>
                <div className="drawer__list">
                    <div className="drawer__item">
                        <img className="drawer__item-img" width={70} height={70} src="/img/sneakers/01.jpg" alt="sneakers" />
                        <div className="drawer__item-desc">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="drawer__item-remove" src="/img/btn-remote-hover.svg" alt="remote" />
                    </div>
                    <div className="drawer__item">
                        <img className="drawer__item-img" width={70} height={70} src="/img/sneakers/02.jpg" alt="sneakers" />
                        <div className="drawer__item-desc">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>8 499 руб.</b>
                        </div>
                        <img className="drawer__item-remove" src="/img/btn-remote-hover.svg" alt="remote" />
                    </div>
                </div>
                <div className="drawer__bottom">
                    <ul className="drawer__bottom-list">
                        <li className="drawer__bottom-item">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="drawer__bottom-item">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
};

export default Drawer;
function Card() {
    return (
        <div className="content__card">
            <div className="content__favorite">
                <img src="/img/nolike.svg" alt="nolike" />
            </div>
            <img className="content__img" src="/img/sneakers/01.jpg" width={133} height={112} alt="sneakers" />
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
    )
};

export default Card;

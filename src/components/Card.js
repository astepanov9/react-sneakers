import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {

    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, imageUrl, title, price });
        setIsFavorite(!isFavorite);
    };

    return (
        loading ? (
            <div className="content__card">
                <ContentLoader
                    speed={1}
                    width={200}
                    height={200}
                    viewBox="0 0 250 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="-5" rx="0" ry="0" width="200" height="159" />
                    <rect x="0" y="207" rx="0" ry="0" width="94" height="15" />
                    <rect x="0" y="237" rx="0" ry="0" width="94" height="15" />
                    <rect x="127" y="207" rx="10" ry="10" width="74" height="48" />
                    <rect x="0" y="175" rx="0" ry="0" width="200" height="15" />
                </ContentLoader>
            </div>
        ) : (
            <div className="content__card">
                <div className="content__favorite" onClick={onFavorite}>
                    <img src={isFavorite ? '/img/like.svg' : '/img/nolike.svg'} alt="nolike" onClick={onClickFavorite} />
                </div>
                <img className="content__img" src={imageUrl} width={133} height={112} alt="sneakers" />
                <p>{title}</p>
                <div className="content__card-bottom">
                    <div className="content__card-price">
                        <span>Цена: </span>
                        <b>{price} руб.</b>
                    </div>
                    <img src={isItemAdded(id) ? '/img/plus-check.svg' : '/img/plus.svg'} className="content__card-button" width={32} height={32} alt="plus" onClick={onClickPlus} />
                </div>
            </div>
        )

    )
};

export default Card;

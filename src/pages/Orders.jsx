import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Orders() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://62fbe803e4bcaf53518f41a8.mockapi.io/orders');
            setIsLoading(false);
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        })();
    }, []);

    return (
        <div className="content">
            <div className="content__top">
                <h1>Мои заказы</h1>
            </div>
            <div className="content__product">
                {(isLoading ? [...Array(12)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Orders;
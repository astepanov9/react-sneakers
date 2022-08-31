import React from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Orders() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://62fbe803e4bcaf53518f41a8.mockapi.io/orders');
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <div className="content">
            <div className="content__top">
                <h1>Мои заказы</h1>
            </div>
            <div className="content__product">
                {[].map((item, index) => (
                    <Card />
                ))}
            </div>
        </div>
    );
};

export default Orders;
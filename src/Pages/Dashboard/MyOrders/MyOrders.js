import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    // get user orders 
    useEffect(() => {
        const url = `https://infinite-escarpment-16645.herokuapp.com/orders/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, user.email])

    // handle deleted function update 
    const handleCheckIsDelted = (event) => {
        setIsDeleted(event);
    }

    return (
        <div>
            <div className="bg-light py-5 my-4">
                <div className=" mx-auto row g-4">
                    {
                        orders.length
                            ?
                            orders.map(order => (
                                <MyOrder
                                    key={order._id}
                                    order={order}
                                    handleCheckIsDelted={handleCheckIsDelted}
                                />
                            ))
                            :
                            <div>
                                <h2 className="text-center text-warning">Order Not Found</h2>
                                <h2 className="text-center text-success">Please Order A New Product</h2>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
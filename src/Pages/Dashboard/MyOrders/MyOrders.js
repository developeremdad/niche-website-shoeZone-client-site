import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
// import myOrderCover from '../../../images/my-order-cover.png';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/orders${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, user.email])
    const handleCheckIsDelted = () => {
        setIsDeleted(true);
    }

    return (
        <div>
            {/* <div className="bg-white px-5 py-3">
                <img className="img-fluid" src={myOrderCover} alt="" />
            </div> */}
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
                            <h2 className="text-center text-warning">Order Not Found</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
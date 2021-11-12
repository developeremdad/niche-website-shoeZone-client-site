import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        fetch('https://infinite-escarpment-16645.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, isUpdate])


    // update status when click button 
    const handleUpdateStatus = id => {
        setIsUpdate(false);
        const updatedStatus = { status: 'Approved' };
        const url = `https://infinite-escarpment-16645.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsUpdate(true);
                }
            })
    }


    // manage or delete a order 
    const handleCancelOrder = id => {
        setIsDeleted(false);
        const proceed = window.confirm('Are you sure! You want to Cancel and  Delete?');
        if (proceed) {
            const url = `https://infinite-escarpment-16645.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                        setIsDeleted(true);
                    }
                });
        }
    }
    return (
        <div>
            <div className="bg-light p-5 my-5">
                {
                    orders.length
                        ?
                        orders.map(order => (
                            <div className="container mx-auto row manage-container py-3 shadow">
                                <div className="col-lg-5 col-md-5 col-12">
                                    <p className="text-primary fs-5"><span><i className="fas fa-plane-departure me-2 text-dark"></i></span>{order?.name}</p>
                                    <p><span><i className="fas fa-envelope me-2"></i></span>{order?.email}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <p><small><span><i className="fas fa-phone-alt me-2"></i></span>{order?.phone}</small></p>
                                    <p className="text-danger fs-5"><span><i className="fas fa-dollar-sign me-2 text-dark"></i></span>${order?.price}</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-12 d-flex align-items-center">
                                    <button className="update-btn" onClick={() => handleUpdateStatus(order?._id)}>{order?.status}</button>
                                    <button className="delete-btn" onClick={() => handleCancelOrder(order?._id)}><span><i className="fas fa-times"></i></span></button>
                                </div>
                            </div >
                        ))
                        :
                        <div>
                            <h2 className="text-center text-warning">Order Not Found</h2>
                            <h2 className="text-center text-success">Please Order A New Product</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default ManageOrders;
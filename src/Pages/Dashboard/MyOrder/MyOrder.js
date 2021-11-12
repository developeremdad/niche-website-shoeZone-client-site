import React, { useEffect, useState } from 'react';

const MyOrder = (props) => {
    const { name, img, price, _id, status } = props.order;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // handle delete or cencel order fuction 
    const handleCancelOrder = id => {
        props.handleCheckIsDelted(false);
        const proceed = window.confirm('Are you sure! You want to Cancel and  Delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                        props.handleCheckIsDelted();
                    }
                });
        }
    }
    return (

        <div className="col-lg-6 col-md-6 col-12">
            <div className="bg-white d-flex flex-lg-row flex-column border ">
                <div className="col-lg-3 col-12">
                    <img className="img-fluid h-100" src={img} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-12 row">
                    <div className="col-9 ps-4 pt-2 border-end border-2">
                        <b><p>{name}</p></b>
                        <p><span className="text-light p-1 rounded bg-success">Status</span> {status}</p>
                        <p className="text-danger">${price}</p>
                    </div>
                    <div className="col-3 cancel-order d-flex align-items-center justify-content-center">
                        <button onClick={() => handleCancelOrder(_id)} className="btn btn-danger"> <span><i className="fas fa-times"></i></span> </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyOrder;
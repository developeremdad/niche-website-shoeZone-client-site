import React, { useEffect, useState } from 'react';

const MyOrder = (props) => {
    const { name, img, price, _id } = props.order;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-falls-76719.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure! You want to Cancel and  Delete?');
        if (proceed) {
            const url = `https://sheltered-falls-76719.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully Complete');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                        props.handleCheckIsDelted();
                    }
                });
        }
    }
    return (

        <div className="col-lg-6 col-md-6 col-12">
            <div className="bg-white d-flex flex-lg-row flex-column">
                <div className="col-lg-3 col-12">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-12 row">
                    <div className="col-9 ps-4 pt-2 border-end border-2">
                        <b><p>{name}</p></b>
                        {/* <p>{order?.place}</p> */}
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
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://infinite-escarpment-16645.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])


    // handle delete or cencel product fuction 
    const handleCancelOrder = id => {
        setIsDeleted(false);
        const proceed = window.confirm('Are you sure! You want to Cancel and  Delete?');
        if (proceed) {
            const url = `https://infinite-escarpment-16645.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restProduct = products.filter(order => order._id !== id);
                        setProducts(restProduct);
                        setIsDeleted(true);
                    }
                });
        }
    }
    return (
        <div className="my-4">
            <div className="row container mx-auto">
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleCancelOrder={handleCancelOrder}
                    />)
                }

            </div>
        </div>
    );
};

export default ManageProducts;
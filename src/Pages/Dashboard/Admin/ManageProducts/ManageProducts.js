import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
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

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
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
                    swal("Opps! Your product is deleted ):", {
                        icon: "success",
                    });
                } else {
                    swal("Your product is safe!");
                }
            });

    }
    return (
        <div className="my-2">
            <div className="row mx-auto">
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
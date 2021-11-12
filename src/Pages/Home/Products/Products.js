import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://infinite-escarpment-16645.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="container py-4 text-center my-4">
                <h1 className="text-danger">FEATURED PRODUCTS</h1>
                <p>Find your next product</p>
            </div>

            <div className="container">
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {
                        products.length ?
                            products.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            />)
                            :
                            <div className="text-center mt-3 mx-auto mt-5"><Spinner animation="border" variant="danger" /></div>
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;
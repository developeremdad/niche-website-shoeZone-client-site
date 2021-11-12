import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Header />
            {/* display all products  */}
            <div className="container py-4 text-center my-4">
                <h1 className="text-danger">FEATURED TOURS</h1>
                <p>Find your next tour</p>
            </div>

            <div className="container">
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {
                        products.length ?
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            />)
                            :
                            <div className="text-center mt-3 mx-auto mt-5"><Spinner animation="border" variant="danger" /></div>
                    }
                </Row>
            </div>


            <Footer />
        </div>
    );
};

export default AllProducts;
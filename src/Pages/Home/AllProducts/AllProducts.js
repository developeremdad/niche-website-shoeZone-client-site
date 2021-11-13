import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';
import bg from '../../../images/product-cover.png';
import { NavLink } from 'react-router-dom';


const bgCover = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://infinite-escarpment-16645.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Header />
            {/* display all products  */}
            <div style={bgCover} className="py-5 text-center mb-5">
                <h1 style={{ color: '#87b106', marginBottom: '15px' }} >NEW ARRIVALS PRODUCTS</h1>
                <p className="text-color fs-5">Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius <br /> claritas est etiam processus dynamicus, qui sequitur mutationem.</p>

                <p className="text-light fs-5 mt-2 fw-bold"> <NavLink className="text-decoration-none text-primary" to="/">Home  /  </NavLink> Products</p>
            </div>

            <div className="container mb-5">
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
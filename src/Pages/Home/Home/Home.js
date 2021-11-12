import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Products from '../Products/Products';
import BannerTop from '../BannerTop/BannerTop';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerTop />
            <Products />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
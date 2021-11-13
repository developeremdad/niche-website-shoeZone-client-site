import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Products from '../Products/Products';
import BannerTop from '../BannerTop/BannerTop';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerTop />
            <About />
            <Products />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
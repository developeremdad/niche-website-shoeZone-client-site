import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import BannerTop from '../BannerTop/BannerTop';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerTop />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import { useHistory } from 'react-router';
import './BannerTop.css';

const BannerTop = () => {
    const history = useHistory()
    const handleRedirect = () => {
        history.push('/allproducts');
    }
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`https://i.ibb.co/nBczJ3T/slide1.jpg`} className="d-block w-100" alt="slide1" />
                        <div className="carousel-caption d-none d-md-block carusel-contect">
                            <h1 className="carusel-title">Sale</h1>
                            <p className="carusel-caption">Running Sneakers Men's like plex</p>
                            <button onClick={handleRedirect} className="explore-btn mt-5">Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`https://i.ibb.co/5FC2Lr7/slide2.jpg`} className="d-block w-100" alt="slide2" />
                        <div className="carousel-caption d-none d-md-block carusel-contect">
                            <h1 className="carusel-title">New</h1>
                            <p className="carusel-caption">Running Sneakers Men's like plex</p>
                            <button className="explore-btn mt-5">Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`https://i.ibb.co/YZz2TwJ/slide3.jpg`} className="d-block w-100" alt="slide3" />
                        <div className="carousel-caption d-none d-md-block carusel-contect">
                            <h1 className="carusel-title">Sale</h1>
                            <p className="carusel-caption">Running Sneakers Men's like plex</p>
                            <button className="explore-btn mt-5">Explore Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default BannerTop;
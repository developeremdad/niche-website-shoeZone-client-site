import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container mx-auto row text-white py-4 text-start">
                <div className="col-lg-3 col-md-6 col-12">
                    <h5 className="mb-4">About Us</h5>
                    <p className="text-color">Most shoe lasts do not have individual toes. The sandal last will have a slot for the toe-post location.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4">Quick Links</h5>
                    <p><Link className="text-decoration-none text-color link-text" to="/home">Home</Link></p>
                    <p><Link className="text-decoration-none text-color link-text" to="/contact">Contact</Link></p>
                    <p><Link className="text-decoration-none text-color link-text" to="/dashboard">Dashboard</Link></p>
                    <p><Link className="text-decoration-none text-color link-text" to="/allProducts">Explore Product</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4">Contact Info</h5>
                    <p className="text-color link-text"><span><i className="fas fa-map-marker-alt me-2"></i></span> 3481 Rabana Place, 2090</p>
                    <p className="text-color link-text"><span><i className="fas fa-phone-alt me-2"></i></span> +880 17980XXXXX</p>
                    <p className="text-color link-text"><span><i className="fas fa-envelope me-2"></i></span> info@blusky.com</p>
                    <p className="text-color link-text"><span><i className="fas fa-fax me-2"></i></span> Fax : 02 9635 0247</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4">Business Hour</h5>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Monday-Friday:</p>
                        <p>9am - 5pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Saturday:</p>
                        <p>10am - 2pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Sunday:</p>
                        <p>Closed.</p>
                    </div>
                </div>
            </div>

            {/* footer bottom  */}

            <div className="footer-bottom py-4">
                <div className="d-flex justify-content-between container align-items-center mx-auto">
                    <p className="text-color">Copyright &copy; 2021. All rights reserved || Developer Emdad</p>
                    <div>
                        <span><i className="footer-icon fab fa-facebook-square"></i></span>
                        <span><i className="footer-icon fab fa-whatsapp-square"></i></span>
                        <span><i className="footer-icon fab fa-instagram-square"></i></span>
                        <span><i className="footer-icon fab fa-youtube-square"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import bg from '../../../images/product-cover.png';
import { NavLink } from 'react-router-dom';


const bgCover = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const Contact = () => {
    return (
        <div>
            <Header />

            <div style={bgCover} className="py-5 text-center mb-5">
                <h1 style={{ color: '#87b106', marginBottom: '15px' }} >CONTACT US</h1>
                <p className="text-color fw-bold  fs-5"> <NavLink className="text-decoration-none text-primary" to="/">Home   /   </NavLink>Contact Us</p>
            </div>
            <div className="my-5">
                <div className="container row gx-4 mx-auto">
                    <div className="col-lg-7 col-md-7 col-12">
                        <form className="border p-5">
                            <h1 className="text-start">Interested in <span style={{ color: '#0995fe' }}>discussing</span> ?</h1>
                            <p style={{ fontSize: '15px', marginBottom: '50px', color: 'gray' }} className="text-start fw-bold">Please fill in this form to contact with us!</p>
                            <div className="my-4">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className=" my-4">
                                <input type="text" className="form-control" placeholder="Your Address" />
                            </div>
                            <div className="my-4 ">
                                <input type="number" className="form-control" placeholder="Your Number" />
                            </div>
                            <div className="form-row row my-4">
                                <div className=" col-md-8">
                                    <input type="text" placeholder="City" className="form-control" />
                                </div>
                                <div className=" col-md-4">
                                    <input type="number" placeholder="Zip Code" className="form-control" />
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea className="form-control" name="comment" id="" cols="30" rows="3" placeholder="Enter Message"></textarea>
                            </div>
                            <button type="submit" className="btn submit-btn">Sign in</button>
                        </form>
                    </div>

                    <div className="col-lg-5 col-md-5 col-12 mt-4">
                        <div style={{ backgroundColor: '#0995fe' }} className="row my-3 py-3">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className="p-4 text-white"><i className="fas fa-phone-square-alt fs-1 "></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-white text-start">Phone</h3>
                                <p className="text-start"><a className="text-decoration-none fs-5 text-white" aria-current="page" href="tel:09600-730073">09600730073</a></p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#0995fe' }} className="row my-3 py-3">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className="p-4 text-white"><i className="fas fa-envelope-square fs-1"></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-white text-start">Email</h3>
                                <p className="text-white text-start fs-5">info@example.com</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#0995fe' }} className="row my-3 py-3">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className="p-4 text-white"><i className="fas fa-globe fs-1"></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-white text-start">Address</h3>
                                <p className="text-white text-start fs-5">www.your-domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* google map  */}
                <div className="my-5">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.003958355313!2d90.42967377311696!3d23.711623361579026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634736049062!5m2!1sen!2sbd" width="100%" style={{ border: 0, height: "360px" }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
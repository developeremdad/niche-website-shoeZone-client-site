import React from 'react';

const About = () => {
    return (
        <div className="my-5 bg-light py-5">
            <div className="row container mx-auto text-start">
                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-fluid" src={`https://i.ibb.co/Sd16XS5/about.webp`} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h1 className="text-start fw-bold ">
                        PULLMAN SNEAKER <br /> ABOUT US.
                    </h1>
                    <h6 className="fs-5">Investigationes demonstraverunt lectores legere me.</h6>
                    <p className="text-color">Quisque consequat venenatis rutrum. Quisque posuere enim augue, in rhoncus diam dictum non.Nunc id ante quis tellus faucibus</p>
                    <hr className="border border-dark" />
                    <p className="text-color fw-bold"><span><i className="fas fa-home me-2"></i></span> Manchester Road 123-78B, Silictown 7854MD</p>
                    <p className="text-color fw-bold"><span><i className="fas fa-phone-alt me-2"></i></span> Phone: +46 123 456 789</p>
                    <p className="text-color fw-bold"> <span><i className="fas fa-envelope me-2"></i></span> Email: hello@sitename.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;
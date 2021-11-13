import React from 'react';

const BonusSection = () => {
    return (
        <div className="my-5">
            <div className="row g-4 container mx-auto px-2">
                <div className="col-lg-6 col-md-6 col-12 px-0">
                    <div>
                        <img src={`https://i.ibb.co/Tq4BwLh/banner1.webp`} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 px-0">
                    <div>
                        <img src={`https://i.ibb.co/N7hVtsW/banner2.webp`} alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BonusSection;
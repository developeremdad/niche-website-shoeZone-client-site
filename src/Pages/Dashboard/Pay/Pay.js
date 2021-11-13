import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/notFoundBg.png';

const notFoundBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(10, 121, 131, 0.404)',
    backgroundPosition: 'center center',
    backgroundBlendMode: 'darken, luminosity',
}
const Pay = () => {
    return (
        <div>
            <div style={{ width: '100%', height: '100vh' }}>
                <div style={notFoundBg} className="w-100 h-100 d-flex justify-content-center align-items-center py-4">
                    <div className="text-center">
                        <h1 style={{ fontSize: '60px', color: 'tomato' }} className="fw-bolder ">Coming Soon</h1>
                        <Link to="/dashboard/myOrders"> <button className="bg-primary mt-4" style={{
                            border: 'none',
                            padding: '10px 40px',
                            fontSize: '20px',
                            color: '#fff',
                            fontWeight: 'bold',
                            letterSpacing: '.1rem'
                        }}>Back to My Order</button> </Link>
                    </div>
                </div>
            </div>
            {/* <img height="100%" width="100%" src={`https://i.ibb.co/7NPXTJ8/coming-soon.png`} alt="" /> */}
        </div>
    );
};

export default Pay;
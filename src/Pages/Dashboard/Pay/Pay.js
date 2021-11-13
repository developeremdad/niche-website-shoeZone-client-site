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
            <div style={{ width: '100%', minHeight: '100vh' }}>
                <div style={notFoundBg} className="w-100 h-100 d-flex justify-content-center align-items-center py-4">
                    <div>
                        <h1 style={{ fontSize: '100px', color: 'tomato' }} className="fw-bolder ">Coming Soon</h1>
                        <Link to="/"> <button className="bg-primary" style={{
                            border: 'none',
                            padding: '10px 40px',
                            fontSize: '20px',
                            color: '#fff',
                            fontWeight: 'bold',
                            letterSpacing: '.1rem'
                        }}>Back to Home</button> </Link>
                    </div>
                </div>
            </div>
            {/* <img height="100%" width="100%" src={`https://i.ibb.co/7NPXTJ8/coming-soon.png`} alt="" /> */}
        </div>
    );
};

export default Pay;
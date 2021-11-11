import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const loginBtn = {
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#87b106',
    marginRight: '10px',
    padding: '5px 10px',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: '.1rem',
    height: '100%'
}
const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink style={{ backgroundColor: '#87b106', color: '#fff', padding: '10px 15px', borderRadius: '5px' }} className="navbar-brand me-5 fs-4 fw-bold" to="/home">SHOE ZONE</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-dark fw-bold" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-dark fw-bold" aria-current="page" to="/allProducts">Products</NavLink>
                            </li>
                            {
                                user.email && <li className="nav-item">
                                    <NavLink className="nav-link text-dark fw-bold" to="/dashboard">Dashboard</NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fw-bold" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {
                                user.email ?
                                    <span className="nav-item user-part">
                                        <span className="me-3">User: {user.displayName}</span>
                                        <button onClick={handleLogOut} style={loginBtn}>Logout <i className="fas fa-sign-out-alt"></i></button>
                                        <span className="nav-item">
                                            {
                                                user.photoURL ?
                                                    <img width="48px" className="rounded-circle" src={user?.photoURL} alt="user" />
                                                    :
                                                    <img width="48px" className="rounded-circle" src={`https://i.ibb.co/jwLpZMr/user-profile.png`} alt="user" />
                                            }
                                        </span>

                                    </span>
                                    :
                                    <span className="nav-item user-part">
                                        <NavLink className="nav-link text-dark fw-bold" to="/login"><button style={loginBtn}>Login <i className="fas fa-sign-in-alt"></i></button></NavLink>
                                    </span>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
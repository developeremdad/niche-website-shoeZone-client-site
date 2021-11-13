import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';
import MyOrders from '../../Dashboard/MyOrders/MyOrders';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Pay from '../Pay/Pay';
import ReviewAdd from '../ReviewAdd/ReviewAdd';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    const { user, handleLogOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    const history = useHistory();
    const handleLogOutButton = () => {
        handleLogOut()
        history.push('/home');
    }
    const { path, url } = useRouteMatch();


    // find admin or not 
    useEffect(() => {
        const url = `https://infinite-escarpment-16645.herokuapp.com/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data?.role) {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false);
                }
            })
    }, [user.email])
    return (
        <div>
            <div style={{ backgroundColor: '#003452', margin: '0' }} className="w-100 row">
                <div className="col-lg-2 col-md-2 col-2 border-end text-start">
                    {
                        user.photoURL ?
                            <div className="d-flex justify-content-center align-items-center"> <img width="48px" className="rounded-circle mt-1" src={user?.photoURL} alt="user" />
                                <button onClick={handleLogOutButton} className="dashboard-logout">Log Out</button>
                            </div>
                            :
                            <div className="d-flex justify-content-center align-items-center p-2"> <img width="48px" className="rounded-circle" src={`https://i.ibb.co/jwLpZMr/user-profile.png`} alt="user" />
                                <button onClick={handleLogOutButton} className="dashboard-logout">Log Out</button>
                            </div>
                    }
                </div>
                <div className="col-lg-10 col-md-10 col-10 text-start">
                    <h1 className="text-center text-white">{isAdmin ? 'Admin' : 'User'} Dashboard</h1>
                </div>
            </div>

            {/* dashboard side bar menu  */}
            <div style={{ margin: '0' }} className="w-100 row">
                <div style={{ backgroundColor: '#333333', padding: '0' }} className="col-lg-2 border-end col-md-2 col-2 text-start">
                    {
                        isAdmin
                            ?
                            <ul className="dashboard-items">
                                <li><Link to="/home" className="text-decoration-none text-white ms-lg-4">Home</Link></li>
                                <li><Link to={`${url}/manageOrders`} className="text-decoration-none text-white ms-lg-4">Manage Orders</Link></li>
                                <li><Link to={`${url}/manageProducts`} className="text-decoration-none text-white ms-lg-4">Manage Products</Link></li>
                                <li><Link to={`${url}/addProduct`} className="text-decoration-none text-white ms-lg-4">Add Product</Link></li>
                                <li><Link to={`${url}/makeAdmin`} className="text-decoration-none text-white ms-lg-4">Make Admin</Link></li>
                                <li id="logOut-item"><button onClick={handleLogOutButton} className="dashboard-logout-list">Log Out</button></li>
                            </ul>
                            :
                            <ul className="dashboard-items">
                                <li><Link to="/home" className="text-decoration-none text-white ms-lg-4">Home</Link></li>
                                <li><Link to={`${url}/pay`} className="text-decoration-none text-white ms-lg-4">Pay</Link></li>
                                <li><Link to={`${url}/myOrders`} className="text-decoration-none text-white ms-lg-4">My Order</Link></li>
                                <li><Link to={`${url}/addReview`} className="text-decoration-none text-white ms-lg-4">Review</Link></li>
                                <li id="logOut-item"><button onClick={handleLogOutButton} className="dashboard-logout-list">Log Out</button></li>
                            </ul>
                    }
                </div>

                {/* dashboard components show */}
                <div className="col-lg-10 col-md-10 col-10 bg-light px-0 text-start">
                    <Switch>
                        <Route exact path={path}>
                            <h1>This is Dashboard</h1>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/addReview`}>
                            <ReviewAdd />
                        </Route>
                        <Route path={`${path}/manageOrders`}>
                            <ManageOrders />
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                    </Switch>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
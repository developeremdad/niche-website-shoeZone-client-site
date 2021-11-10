import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
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

const Dashboard = () => {
    const { user, handleLogOut } = useAuth();
    const history = useHistory();
    const handleLogOutButton = () => {
        handleLogOut()
        history.push('/home');
    }
    let { path, url } = useRouteMatch();
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
                    <h1 className="text-center text-white">User Dashboard</h1>
                </div>
            </div>
            <div style={{ margin: '0' }} className="w-100 row">
                <div style={{ backgroundColor: '#333333', padding: '0', height: '100vh' }} className="col-lg-2 border-end col-md-2 col-2 text-start">
                    <ul className="dashboard-items">
                        <li><Link to="/home" className="text-decoration-none text-white ms-lg-4">Home</Link></li>
                        <li><Link to={`${url}/pay`} className="text-decoration-none text-white ms-lg-4">Pay</Link></li>
                        <li><Link to={`${url}/myOrders`} className="text-decoration-none text-white ms-lg-4">My Order</Link></li>
                        <li><Link to={`${url}/addReview`} className="text-decoration-none text-white ms-lg-4">Review</Link></li>
                        <li id="logOut-item"><button onClick={handleLogOutButton} className="dashboard-logout-list">Log Out</button></li>
                    </ul>
                </div>
                <div style={{ backgroundColor: '#ddd', height: '100vh' }} className="col-lg-10 col-md-10 col-10 text-start">
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
                    </Switch>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;
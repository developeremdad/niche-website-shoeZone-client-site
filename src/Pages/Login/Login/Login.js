import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import bg from '../../../images/loginBg.jpg';

const loginBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const Login = () => {
    const { handleGoogleLogin, handleUserLogin } = useAuth();

    // redirect process setting
    const location = useLocation();
    const history = useHistory();

    // login with google provider 
    const handleLogInWithGoogle = () => {
        handleGoogleLogin(location, history);
    };


    // handle login using login form 
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const { email, password } = data;

        handleUserLogin(email, password, location, history);
    }


    return (
        <div>
            <Header />
            <div style={{ width: '100%', height: '100vh', backgroundColor: '#f5deb3' }} className="py-4">
                <div style={loginBg} className="mx-auto form-container my-3">
                    <h2 className="text-start text-white">Sign In</h2>
                    <p className="text-start text-white">Please fill in this form to create an account!</p>
                    <hr className="border" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" type="email" {...register("email")} placeholder="Email" />
                        <input className="form-control my-3" type="password" {...register("password", { required: true })} placeholder="password" />
                        {/* {errors.password && <span className="text-warning my-1">This field is required</span>} */}
                        <button className="my-2 submit-btn" type="submit">LOG IN  <span><i className="fas fa-sign-in-alt"></i></span></button>
                    </form>
                    <div>
                        <p className="text-white">Don't have an account? <Link to="/register" className="text-decoration-none text-warning">Sign Up</Link></p>
                        <hr className="border border-1 w-25 mx-auto" />
                        <div className="d-flex justify-content-around align-items-center mt-4">
                            <button onClick={handleLogInWithGoogle} className="login-with-btn" ><span><i className="fab fa-google text-primary me-2"></i></span> Login With Google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
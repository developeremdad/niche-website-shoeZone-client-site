import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import bg from '../../../images/loginBg.jpg';
import swal from 'sweetalert';


const registerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const Register = () => {
    const { handleCreateNewUser, handleGoogleLogin } = useAuth();

    // redirect system setting
    const location = useLocation();
    const history = useHistory();

    // login with google provider 
    const handleLogInWithGoogle = () => {
        handleGoogleLogin(location, history);
    };


    // handle register using register form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        handleRegisterSubmit(data);
    }

    //handle register function
    const handleRegisterSubmit = (data) => {
        const { name, email, password, password1 } = data;
        if (password !== password1) {
            swal({
                title: "Greate!",
                text: "Product Successfully  Added!",
                icon: "warning",
                button: "Try again",
            });
            return
        }
        handleCreateNewUser(email, password, name, history);
    }

    return (
        <div>
            <Header />
            <div style={{ width: '100%', height: '100vh', backgroundColor: '#a9bd6d' }} className="py-4">
                <div style={registerBg} className="mx-auto form-container">
                    <h2 className="text-start text-white">Sign Up</h2>
                    <p className="text-start text-white">Please fill in this form to create an account!</p>
                    <hr className="border" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" type="name" {...register("name")} placeholder="Your Name" required />
                        <input className="form-control my-3" type="email" {...register("email")} placeholder="Your Email" required />
                        <input className="form-control my-3" type="password" {...register("password", { required: true })} placeholder="password" />
                        <input className="form-control my-3" type="password" {...register("password1", { required: true })} placeholder="Re Enter password" />
                        {errors.password && <p className="text-danger text-start my-1"><span>This field is required</span> </p>}
                        <button className="my-2 submit-btn" type="submit">REGISTER  <span><i className="fas fa-sign-in-alt"></i></span></button>
                    </form>
                    <div>
                        <p className="text-white">Don't have an account? <Link to="/login" className="text-decoration-none text-warning">Log In</Link></p>
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

export default Register;
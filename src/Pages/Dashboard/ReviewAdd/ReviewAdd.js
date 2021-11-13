import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import bg from '../../../images/loginBg.jpg';
import swal from 'sweetalert';

// background image
const reviewBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const ReviewAdd = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://infinite-escarpment-16645.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Thank You!",
                        text: "Review Successfully Inseted!",
                        icon: "success",
                        button: "Close",
                    });
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="py-4">
                <div style={reviewBg} className="mx-auto form-container my-4">
                    <h2 className="text-start text-white">Review <span className="text-danger">!!!</span></h2>
                    <p className="text-start text-white">Please fill in this form to review this site!</p>
                    <hr className="border" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" type="text" value={displayName} {...register("userName")} required />
                        <input className="form-control my-3" type="email" value={email} {...register("userEmail")} required />
                        <textarea className="form-control my-3" {...register("review", { required: true })} required placeholder="Please write something" />
                        <select className="form-control my-3" {...register("rating", { required: true })}>
                            <option value="5">Rating 5 (Default)</option>
                            <option value="4">Rating 4</option>
                            <option value="3">Rating 3</option>
                            <option value="2">Rating 2</option>
                        </select>

                        <button className="btn btn-primary w-100" type="submit">Review Now</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ReviewAdd;
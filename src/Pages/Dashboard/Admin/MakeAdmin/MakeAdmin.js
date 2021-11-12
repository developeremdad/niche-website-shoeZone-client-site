import React from 'react';
import { useForm } from 'react-hook-form';
import bg from '../../../../images/loginBg.jpg';

// background image
const formBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.role = 'admin';
        fetch('https://infinite-escarpment-16645.herokuapp.com/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    reset();
                    alert('Maked a new admin');
                }
            })
    }
    return (
        <div>
            <div style={formBg} className="mx-auto form-container my-4">
                <h2 className="text-warning">Make A New Admin</h2>
                <hr className="border" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-3 bg-light" {...register("email")} required placeholder="Enter Email" />
                    <button className="btn btn-dark w-100 border border-danger" type="submit"><span><i className="fas fa-user-plus text-warning"></i></span> Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
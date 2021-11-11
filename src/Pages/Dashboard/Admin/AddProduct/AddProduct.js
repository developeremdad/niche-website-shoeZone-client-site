import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import bg from '../../../../images/loginBg.jpg';


// background image
const formBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    backgroundPosition: 'center top',
    backgroundBlendMode: 'darken, luminosity',
}
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-falls-76719.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully inserted');
                    reset();
                }
            })
    }
    return (
        <div>
            {/* <div className="add-service-banner">
                    <img className="w-100" src={addServiceBanner} alt="" />
                    <h1 className="bg-dark text-white text-center py-3">Add New Service</h1>
                </div> */}

            <div style={formBg} className="mx-auto form-container my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-3" {...register("name")} required placeholder="Name" />
                    <input className="form-control my-3" {...register("place")} required placeholder="Place" />
                    <input className="form-control my-3" type="number" {...register("price")} required placeholder="Price" />
                    <textarea className="form-control my-3" {...register("description")} required placeholder="Description" />
                    <input className="form-control my-3" {...register("img")} required placeholder="Link Url" />
                    {/* <input className="form-control my-2" type="submit" /> */}
                    <button className="btn btn-primary w-100" type="submit"><span><i className="fas fa-cart-plus"></i></span> Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
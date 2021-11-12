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
        axios.post('https://infinite-escarpment-16645.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Successfully inserted');
                    reset();
                }
            })
    }
    return (
        <div>
            <div style={formBg} className="mx-auto form-container my-4">
                <h2 className="text-start text-warning">Add Product</h2>
                <p className="text-start text-white">Please fill in this form to insert a new Product!</p>
                <hr className="border" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-3" {...register("name")} required placeholder="Name" />
                    <input className="form-control my-3" type="number" {...register("price")} required placeholder="Price" />
                    <textarea className="form-control my-3" {...register("description")} required placeholder="Description" />
                    <input className="form-control my-3" {...register("img")} required placeholder="Link Url" />
                    <select className="form-control my-3" {...register("rating", { required: true })}>
                        <option value="5">Rating 5 (Default)</option>
                        <option value="4">Rating 4</option>
                        <option value="3">Rating 3</option>
                        <option value="2">Rating 2</option>
                    </select>
                    <button className="btn btn-primary w-100" type="submit"><span><i className="fas fa-cart-plus"></i></span> Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
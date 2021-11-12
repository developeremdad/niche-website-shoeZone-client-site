import React from 'react';

const ManageProduct = (props) => {
    const { name, img, price, _id } = props.product;
    return (
        <div className="col-lg-6 col-md-6 col-12">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start h-100" alt="product img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text"><small className="text-success">${price}</small></p>
                                <button onClick={() => props.handleCancelOrder(_id)} style={{ border: '1px solid #ddd' }}><i className="fas fa-trash-alt text-danger"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
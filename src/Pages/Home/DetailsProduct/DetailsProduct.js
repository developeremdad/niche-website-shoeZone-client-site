import React from 'react';
import { useParams } from 'react-router';

const DetailsProduct = () => {
    const { productId } = useParams();
    return (
        <div>
            <h1>details product page  {productId}</h1>
        </div>
    );
};

export default DetailsProduct;
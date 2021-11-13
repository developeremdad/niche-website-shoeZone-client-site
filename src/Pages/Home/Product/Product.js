import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import './Product.css';

const Product = (props) => {
    const { name, img, description, _id, price, rating } = props.product;
    return (
        <Col>
            <Card>
                <div className="overflow-hidden">
                    <Card.Img className="img-style" variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <h5>{name}</h5>
                            <h5 className="text-danger">$ {price}</h5>
                        </div>
                    </Card.Title>
                    <Card.Text><p className="text-start">{description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')} <span className="text-success fw-bold">read more</span></p></Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        {<ReactStars
                            count={5}
                            value={parseInt(rating)}
                            size={28}
                            color2={'#ffd700'} />
                        }
                        <Link to={`/details/${_id}`}> <button className="book-btn"><span><i className="fas fa-cart-plus fs-5 text-white"></i></span></button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
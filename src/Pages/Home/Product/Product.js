import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const Product = (props) => {
    const { name, img, description, _id, price, rating } = props.service;
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
                    <Card.Text><p className="text-start">{description.split(' ').slice(0, 10).toString().replace(/,/g, ' ')} <span className="text-primary">read more</span></p></Card.Text>
                    <div>
                        {<ReactStars
                            count={5}
                            value={parseInt(rating)}
                            size={28}
                            color2={'#ffd700'} />
                        }
                    </div>
                    <Link to={`/details/${_id}`}> <Button className="w-100">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
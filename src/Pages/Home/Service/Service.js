import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import img from '../../../images/login.webp';

const Service = (props) => {
    // const { name, img, description, _id, price, place } = props.service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between">
                            <h5>Moscow Red City Land</h5>
                            <h5 className="text-danger">$ 2540</h5>
                        </div>
                    </Card.Title>
                    <Card.Text> ourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". <span className="text-warning">read more</span></Card.Text>
                    {/* <Link to={`/details/${_id}`}> <Button className="w-100">Tour in {place}</Button></Link> */}
                    <Button className="w-100">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
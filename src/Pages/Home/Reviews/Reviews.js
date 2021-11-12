import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import ReactStars from 'react-stars';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://infinite-escarpment-16645.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="bg-light py-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="text-uppercase fw-bold">What People Say</h1>
                    <p className="text-uppercase text-danger fw-bold">Customer Website Review</p>
                </div>

                <div className="container">
                    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                        {
                            reviews.length
                                ?
                                reviews.map(review => <Col
                                    key={review?._id}
                                >
                                    <Card className="border">
                                        {/* <Card.Header style={{ color: '#87b106', fontSize: '20px', backgroundColor: '#000' }}>Website Review ({Math.floor(Math.random() * 100)}) <span><i className="fas fa-users text-primary"></i></span> </Card.Header> */}
                                        <Card.Body className="text-start">
                                            <Card.Title><span><i className="fas fa-user text-primary"></i></span> {review?.userName.toUpperCase()}</Card.Title>
                                            <Card.Text>{review?.review}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="d-flex justify-content-between align-items-center">
                                                {<ReactStars
                                                    count={5}
                                                    value={parseInt(review?.rating)}
                                                    size={28}
                                                    color2={'#ffd700'} />
                                                }
                                                <span>({Math.floor(Math.random() * 100)}) <span><i className="fas fa-users text-primary"></i></span> </span>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>)
                                :
                                <div className="text-center mt-3 mx-auto mt-5"><Spinner animation="border" variant="danger" /></div>
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
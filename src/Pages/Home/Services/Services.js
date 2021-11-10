import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-falls-76719.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container py-4 text-center my-4">
                <h1 className="text-danger">FEATURED TOURS</h1>
                <p>Find your next tour</p>
            </div>

            <div className="container">
                <Row xs={1} sm={2} md={2} lg={3} className="g-4">
                    {
                        services.length ?
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            />)
                            :
                            <div className="text-center mt-3 mx-auto mt-5"><Spinner animation="border" variant="danger" /></div>
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;
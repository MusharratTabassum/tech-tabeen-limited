import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <h4>Total services we provide : {services.length}</h4>

            <div className="container-fluid mb-5 ">
                <div className="row ">
                    <div className="col-10 mx-auto ">
                        <div className="row gy-4">
                            {
                                services.map(service => <Service key={service.id}
                                    service={service}></Service>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Services;
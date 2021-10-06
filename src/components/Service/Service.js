import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Service.css'


const Service = (props) => {
    const { icon, name, description } = props.service;
    return (
        <div >
            <div className="col service">
                <div className="card h-100">
                    <img src={icon} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;
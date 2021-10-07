import React from 'react';
import './Service.css'


const Service = (props) => {
    const { icon, name, description } = props.service;
    return (

        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={icon} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>


    );
};

export default Service;
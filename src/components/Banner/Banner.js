import React from 'react';
import './Banner.css';
import imgage from './meet.jpg'

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className=" d-flex pt-4 row">
                    <div className=" banner-section-title col-md-6 col-sm-12 col-12">
                        <h2>A Bridge To Move Forward In The Upcoming World Without Any Hiccups!
                        </h2>
                    </div>
                    <div className=" col-md-6 col-sm-12 col-12 ">
                        <img className="img-fluid" src={imgage} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;
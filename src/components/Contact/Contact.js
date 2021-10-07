import React from 'react';
import './Contact.css';
import image from './Contact-Us-Vector-.jpg';

const Contact = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container form-container">
                <div className="row">
                    <div className="d-flex col-md-6 col-10 mx-10">
                        <div>
                            <img width="550px" src={image} alt="" />
                        </div>
                        <div >
                            <form noValidate className="contact-form">
                                <div className="w-100 col-lg-12 col-md-12 col-12">
                                    <div className="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder='First Name' required type="text" className="form-control" />
                                                <div className="invalid-feedback">First name is required</div>
                                            </div>

                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder='Last Name' required type="text" className="form-control " />
                                                <div className="invalid-feedback">Last name is required</div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="email" placeholder='Email' required type="text" className="form-control input-area" />
                                                <div className="invalid-feedback">Email is required</div>
                                            </div>

                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <input type="text" placeholder='Subject' required type="text" className="form-control input-area" />
                                                <div className="invalid-feedback">First name is required</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="col-md-12">
                                            <div className="form-group">
                                                <textarea placeholder=" Message" name="message" required="" className="input-area" spellcheck="false"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="col-12">
                                <a href="/about" className="button"> Submit</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
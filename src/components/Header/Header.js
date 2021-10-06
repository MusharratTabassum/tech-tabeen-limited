import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './TTL-Logo_250x66-White.png';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="container">
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 nav-text"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink activeStyle={activeStyle} to="/home" className="items">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about" className="items">About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/service" className="items">Service</NavLink>
                            <NavLink activeStyle={activeStyle} to="/contact" className="items">Contact</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;
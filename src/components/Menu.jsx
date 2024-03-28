import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
const Menu = () => {

    return (
        <>
            <Navbar className="custom-navbar sticky-top" variant="dark" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img src="./images/button.png" className='button' alt="Toggle" />

                </Navbar.Toggle>
                <Navbar.Collapse id="navbarNavDropdown" expand="md">
                    <Nav>
                        <Nav.Item>
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/about"}>About me</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/projects"}>My projects</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/cv"}>CV</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/contact"}>Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Menu
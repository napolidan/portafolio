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
                <h3 className="basement navbar-text">Daniel <span className="yellow-text">Napoli</span></h3>
                <Navbar.Collapse id="navbarNavDropdown" expand="md">
                    <Nav>
                        <Nav.Item>
                            <Link className="nav-link" to={"/"}><span>Home</span></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/about"}><span>About me</span></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/projects"}><span>My projects</span></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/cv"}><span>CV</span></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to={"/contact"}><span>Contact</span></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Menu
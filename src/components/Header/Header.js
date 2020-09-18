import React from 'react';
import {   Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../Logo.png';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="Header">
            <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                    </Form>

                    <Nav className="Nav" >
                        
                        <li>
                          <Link to="/news">News</Link>
                        </li>
                        <li>
                          <Link to="/destination">Destination</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                         <Link to="/login">Login</Link>
                        </li>
                        
                     </Nav>

                </Navbar> 
        </div>
    );
};

export default Header;
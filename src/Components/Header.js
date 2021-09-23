import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href=""> Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/add">AddProduct</Link>
                    <Link to="/update">UpdateProduct</Link>
                </Nav>
                <Nav>
                    <NavDropdown title={'user Name'}>
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}
export default Header
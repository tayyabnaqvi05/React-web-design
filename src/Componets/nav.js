import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

const Navi = () => {
  return (
    <>
      <Navbar expand="lg" className="navbg">
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" src={logo} className="imagecl" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <NavDropdown title="ENGLISH" id="navbarScrollingDropdow">
                <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Spanish</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">SIGN IN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navi;

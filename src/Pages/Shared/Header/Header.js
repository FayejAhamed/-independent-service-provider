import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    <Nav.Link as={Link} to='/attorney'>Attorney</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='about'>About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
     
      <Nav.Link as={Link} to='/register'>registration</Nav.Link>
      <Nav.Link as={Link} to='/login'>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <Container>
    //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //     <Nav className="me-auto">
    //       <Nav.Link as={Link} to='home'>Home</Nav.Link>
    //       <Nav.Link as={Link} to='attorney'>Attorney</Nav.Link>
    //       <Nav.Link as={Link} to='service'>Service</Nav.Link>
    //       <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
    //       <Nav.Link as={Link} to='about'>About</Nav.Link>
    //       <Nav.Link as={Link} to='contact'>Contact Us</Nav.Link>
        
    //     </Nav>
    //     <Nav>
    //         <Nav.Link>Login</Nav.Link>
    //     </Nav>
    //     </Container>
    //   </Navbar>
    
    );
};

export default Header;
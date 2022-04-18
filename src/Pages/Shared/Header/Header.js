import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
   const handleSignOut = () =>{
        signOut(auth)
    }
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <img style={{width:'40px'}} src="https://cdn-icons.flaticon.com/png/512/2669/premium/2669443.png?token=exp=1650265392~hmac=cd14be4e8d8feead099b619c96e2d59b" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    {/* <Nav.Link as={Link} to='/attorney'>Attorney</Nav.Link> */}
    <Nav.Link as={Link} to='about'>About</Nav.Link>
    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
    </Nav>
    <Nav>
     {
       user ?  <Nav.Link onClick={handleSignOut} as={Link} to='/login'>SingOut</Nav.Link> :  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
     }
     
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default Header;
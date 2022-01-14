import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'


import React from 'react'

export default function NavBar() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Hernandez 5</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link to="aboutus" spy={true} smooth={true} duration={250}> <Nav.Link>About Us</Nav.Link> </Link>
                  <Link to="contact" spy={true} smooth={true} duration={250}><Nav.Link>Contact</Nav.Link> </Link>
                </Nav>
                <Nav>
                </Nav>
              </Navbar.Collapse>
          </Container>      
        </Navbar>
        </div>
    )
}

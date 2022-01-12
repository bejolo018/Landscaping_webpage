import { Navbar, Nav, Container } from 'react-bootstrap'

import React from 'react'

export default function NavBar() {
    return (
        <div>
          
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Hernandez 5</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#aboutus">About Us</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                </Nav>
              </Navbar.Collapse>
          </Container>      
        </Navbar>
        </div>
    )
}

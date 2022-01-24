import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

export default function BottomNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#e2591d'}} variant="dark">
                <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

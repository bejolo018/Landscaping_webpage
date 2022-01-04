import { Nav } from 'react-bootstrap'

import React from 'react'

export default function NavBar() {
    return (
        <div>
<Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">About Us</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Contact</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}

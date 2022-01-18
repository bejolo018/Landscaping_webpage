import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutUs() {
    return (
        <div className='aboutus'>
            <Container style={{marginTop: '20px', color: 'white'}}>
                <h1 style={{textAlign: 'center', padding: '20px'}}>About Us</h1>
                <p style={{textAlign: 'center', marginBottom: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Container>
        </div>
    )
}

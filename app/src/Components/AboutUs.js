import React from 'react'
import { Container } from 'react-bootstrap'

export default function AboutUs() {
    return (
        <div className='aboutus'>
            <Container style={{marginTop: '20px', color: 'white', textShadow: '2px 2px 4px #000000'}}>
                <h1 style={{textAlign: 'center', padding: '20px'}}>About Us</h1>
                <h5 style={{ marginBottom: '30px'}}> Industrious, and experienced, Hernandez 5 Group installs fencing for residential and commericial customers in and around the Greater San Antonio area. Our goal is to provide customers with the comfort of knowing that they have knowledgeable, and courteous installers that will provide excellent service and satisfaction. Have any questions? Feel free to reach out to us through phone or email using the information below! </h5>
            </Container>
        </div>
    )
}

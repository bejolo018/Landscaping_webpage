import React, { useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';

export default function Contact() {

        const form = useRef()

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_fwkk6rs', 'template_xjd5qgm', form.current, 'user_C7FrSbexbasqTULl2eawi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div className='contact'>
            <Container style={{marginBottom :'75px', color: 'white'}}>
                <h1 style={{textAlign:'center', padding: '5px'}}> Contact</h1>

                <div>
                <h3 style={{padding: '5px'}} >Call us: <a href="tel:210-639-3730">210-639-3730</a></h3>

                <h4 style={{padding: '5px'}}>Hours of Operation:</h4>
                <ul style={{marginLeft: '-26px'}}>
                    <li style={{listStyle: 'none'}}>Monday: 7:00 AM – 5:00 PM</li>
                    <li style={{listStyle: 'none'}}>Tuesday: 7:00 AM – 5:00 PM</li> 
                    <li style={{listStyle: 'none'}}>Wednesday: 7:00 AM – 5:00 PM</li> 
                    <li style={{listStyle: 'none'}}>Thursday: 7:00 AM – 5:00 PM</li> 
                    <li style={{listStyle: 'none'}}>Friday: 7:00 AM – 5:00 PM</li> 
                </ul>

                <h3 style={{ padding: '5px'}}>Email Us:</h3>
                </div>

                <Form style={{padding: '5px'}} ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" name='user_name' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name='user_email' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name='message' rows={3} placeholder="Message" />
                    </Form.Group>
                    <Button variant="success" type="submit" value="Send">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}


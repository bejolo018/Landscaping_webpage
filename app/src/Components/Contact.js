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
            <Container style={{ marginBottom :'75px'}}>
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" name='user_name' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name='user_email' />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" name='message' rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Send">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}


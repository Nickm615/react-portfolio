import React from "react";
import { Form, Button, Card } from 'react-bootstrap'

function Contact() {
  return(
    <Card id='contact' className = 'row col-10 m-auto'>
      <Card.Title>Contact Me</Card.Title>


      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="string" placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tell me something</Form.Label>
          <Form.Control type="string" placeholder="Your message" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Card>
  )
}
export default Contact;
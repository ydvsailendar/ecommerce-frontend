import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  let history = useHistory();
  return (
    <Container style={{ padding: '40px', width: '50%' }}>
      <Row style={{ alignItems: 'center' }}>
        <Col xs={12}>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId='firstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter first name' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='lastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter last name' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='phone'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type='text' placeholder='Enter phone' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='age'>
                  <Form.Label>Age</Form.Label>
                  <Form.Control type='number' placeholder='Enter age' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='gender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as='select'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control type='textarea' placeholder='Enter address' />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              onClick={() => history.push('/user')}
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

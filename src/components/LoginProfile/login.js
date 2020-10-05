import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';
export default function Login() {
  let history = useHistory();
  return (
    <Form>
      <Form.Group controlId='formBasicEmailPhone'>
        <Form.Label>Email address/Phone number</Form.Label>
        <Form.Control type='text' placeholder='Enter email | phone' />
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Row>
        <Col>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Col>
        <Col>
          <Row>
            <Col>
              <p>New Customer?</p>
            </Col>
            <Col>
              <Button
                variant='primary'
                type='submit'
                onClick={() => history.push('/signup')}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

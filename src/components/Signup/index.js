import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import ADDUSER from '../../graphql/mutations/user';

export default function SignUp() {
  const [signUp] = useMutation(ADDUSER);
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState();
  const [show, setShow] = useState(false);
  const onSubmit = async (data) => {
    let name = `${data.firstName} ${data.lastName}`;
    delete data.firstName;
    delete data.lastName;
    data.name = name;
    data.age = Number(data.age);
    try {
      let userCreated = await signUp({ variables: data });
      history.push('/');
    } catch (err) {
      setErrorMessage(err.message);
      setShow(true);
    }
  };

  const PopUp = (
    <Toast delay={2000} autohide onClose={() => setShow(false)} show={show}>
      <Toast.Header>
        <strong className='mr-auto'>{errorMessage}</strong>
      </Toast.Header>
    </Toast>
  );
  return (
    <Container style={{ padding: '40px', width: '50%' }}>
      <Row style={{ alignItems: 'center' }}>
        <Col xs={12}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Group controlId='firstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='firstName'
                    placeholder='Enter first name'
                    ref={register}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='lastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='lastName'
                    placeholder='Enter last name'
                    ref={register}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
                ref={register}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='Password'
                    ref={register}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='phone'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type='text'
                    name='phone'
                    placeholder='Enter phone'
                    ref={register}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='age'>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type='number'
                    name='age'
                    placeholder='Enter age'
                    ref={register}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='gender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as='select' ref={register} name='gender'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='textarea'
                name='address'
                ref={register}
                placeholder='Enter address'
              />
            </Form.Group>
            <Row>
              <Col>
                <Button variant='primary' type='submit'>
                  Sign Up
                </Button>
              </Col>
              <Col>{errorMessage ? PopUp : null}</Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

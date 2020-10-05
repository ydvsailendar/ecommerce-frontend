import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './login';

export default function User() {
  return (
    <Container style={{ padding: '40px', width: '40%' }}>
      <Row style={{ alignItems: 'center' }}>
        <Col xs={12}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

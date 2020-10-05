import { Link } from '@material-ui/core';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function createGroup(products) {
  return products.map((product) => (
    <Card key={product._id}>
      <Card.Img
        variant='top'
        src={product.thumbnail}
        height='300px'
        width='300px'
        style={{ padding: '10px' }}
      />
      <center>
        <Card.Body>
          <Link to='#' style={{ textDecoration: 'none' }}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>Rs. {product.price}</Card.Text>
        </Card.Body>
      </center>
    </Card>
  ));
}
export default function ListProducts({ products }) {
  return <CardGroup>{createGroup(products)}</CardGroup>;
}

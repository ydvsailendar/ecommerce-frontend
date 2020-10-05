import React from 'react';
import { useQuery, gql } from '@apollo/client';
import ListProducts from './ListProducts';
import MovingProducts from './MovingProducts';

const PRODUCTS = gql`
  query {
    Products {
      _id
      name
      description
      thumbnail
      price
      count
      stock
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <MovingProducts products={data.Products} />
      <ListProducts products={data.Products} />
    </div>
  );
}

import React from 'react';
import { useQuery } from '@apollo/client';
import ListProducts from './ListProducts';
import MovingProducts from './MovingProducts';
import PRODUCTS from '../../graphql/queries/product';

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

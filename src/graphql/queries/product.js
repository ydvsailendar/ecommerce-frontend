import { gql } from '@apollo/client';

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

export default PRODUCTS;

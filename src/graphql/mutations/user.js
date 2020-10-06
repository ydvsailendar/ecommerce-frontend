import { gql } from '@apollo/client';

const ADDUSER = gql`
  mutation(
    $name: String!
    $email: String!
    $password: String!
    $gender: String!
    $age: Int!
    $address: String!
    $phone: String!
  ) {
    signUp(
      name: $name
      email: $email
      password: $password
      gender: $gender
      age: $age
      address: $address
      phone: $phone
    ) {
      token
      expiresIn
    }
  }
`;

export default ADDUSER;

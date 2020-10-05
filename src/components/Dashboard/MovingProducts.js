import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

export default function MovingProducts({ products }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function createCarousel(products) {
    return products.map((product) => (
      <Carousel.Item key={product._id}>
        <img
          className='d-block w-100'
          src={product.thumbnail}
          alt={product.name}
        />
      </Carousel.Item>
    ));
  }

  return (
    <Carousel
      style={{ padding: '15px' }}
      indicators={false}
      fade={true}
      interval={1000}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {createCarousel(products)}
    </Carousel>
  );
}

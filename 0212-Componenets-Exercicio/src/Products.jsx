import React from 'react';
import Title from './Title';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <>
      <Title color="#418ed2">Products</Title>

      {
        products.map(product => <Product key={product.nome} product={product} />)
      }
    </>
  )
}

export default Products;
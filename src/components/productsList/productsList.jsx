import React from 'react';
import ProductCard from './productCards';

const ProductsList = (props) => {

  const { allProducts } = props;
  return (
    <div className='productlist'>
      {
        allProducts.map((product, index) => {
          return <ProductCard key={ product.id } product={product} />
        })
      }
    </div>
    
  )
}

export default ProductsList;
import React, { useState, useEffect } from 'react';
import ProductsList from '../../components/productsList/productsList';
import Sidebar from '../../components/sidebar/sidebar';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/products')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data.products);
      })
      .catch(err => console.error(err));
  }, []);

  function filterByCategory(id) {
    const filteredProducts = allProducts.filter(product => {
      return product.category === id;
    });
    setFilteredProducts(filteredProducts);
  }

  return (
    <div className='productsWrapper container'>
      <div className='productsWrapper__sidebar'>
        <Sidebar filterBy={filterByCategory}/>
      </div>
      <div className='productsWrapper__main'>
        <ProductsList allProducts={filteredProducts.length ? filteredProducts : allProducts} />
      </div>
    </div>
  )
}

export default Products;

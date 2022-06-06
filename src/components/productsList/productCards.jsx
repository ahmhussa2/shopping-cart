import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import store from '../../redux/store';
import { addItem } from '../../redux/cart/cartAction';

const ProductCard = (props) => {
  const { product } = props;
  const [cartValue, setCartValue] = useState();
	const dispatch = useDispatch();

  const addItemToCart = (data) => {
    data = {...data, 'count': 1, totalPrice: data.price};
    setCartValue(data);
    dispatch(addItem(data));
  }
  const resetBuynowButtons = () => {
    if (store.getState().cart.length === 0) setCartValue(null);
  }
  store.subscribe(resetBuynowButtons);
  return (
    <div className='productCard'>
      <h3 className='productCard__heading'>{product.name}</h3>
      <div className='productCard__dummyWrapper'>
        <div className='productCard__imageWrapper'>
          <LazyLoadImage className='productCard__image' loading='lazy' src={`http://localhost:3000/${product.imageURL}`}  alt={product.name}/>
        </div>
        <div className='productCard__textWrapper'>
          <p className='productCard__description'>{product.description}</p>
          <div className='productCard__priceWrapper'>
            <span className='productCard__price'>{`MRP Rs.${product.price}`}</span>
            {
              cartValue
                ? <button className='productCard__button productCard__button--addedToCart'>Added to Cart</button>
                : <button className='productCard__button productCard__button--buynow' onClick={ () => addItemToCart(product)}>Buy now <span className='productCard__buynow--tablet'>{`@ Rs.${product.price}`}</span></button>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
// https://stellar-meerkat-0939c0.netlify.app
export default ProductCard;
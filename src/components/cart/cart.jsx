import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import store from '../../redux/store';
import { incrementItem, decrementItem } from '../../redux/cart/cartAction';
import { useDispatch } from 'react-redux';
import cartImage from '../../cart.svg';

function Cart() {
  const [cartItems, setCartItems] = useState(store.getState());
  const [show, setShow] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const dispatch = useDispatch();

  const updateCartItems = () => {
    setCartItems(store.getState());
  }
  store.subscribe(updateCartItems);

  useEffect(() => {
    let count = 0;
    cartItems.cart.length >= 1 && cartItems.cart.forEach((item) => {
      count += item.count;
    })
    setItemsCount(count);
  }, [cartItems]);

  

  return (
    <div className="cart">
      <button className ="button button--secondary" onClick={() => setShow(true)}>
        <LazyLoadImage src={cartImage} alt="Cart" />
        <span>{itemsCount} Items</span></button>

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="">
        <Modal.Header closeButton closeVariant={'white'}>
          <Modal.Title id="example-custom-modal-styling-title">
            My Cart({itemsCount})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            cartItems.cart.map((item, index) => {
              return (
                <div key={item.id || index} className="cartItems">
                  <div className="cartItems__ImageWrapper">
                    <LazyLoadImage src={`http://localhost:3000${item.imageURL}`} alt={item.name} />
                  </div>
                  <div className="cartItems__detailsWrapper">
                    <h3 className="cartItems__heading">{item.name}</h3>
                    <div className="cartItems__itemcount">
                      <button onClick={() => {dispatch(decrementItem(item))}}>-</button> <span>{item.count}</span> <button onClick={() => {dispatch(incrementItem(item))}}>+</button> <span>Rs.{item.price}</span> x <span>{item.count}</span> <span>Rs.{item.totalPrice}</span>
                    </div>
                    
                  </div>
                </div>
              )
            })
          }
          <div className="cartItems__tagLine">
            <LazyLoadImage src={`http://localhost:3000/static/images/lowest-price.png`} alt="Lowest Price" />
            <span>You won't find it cheaper anywhere</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="cartItems__promoCode">
            <p className="cartItems__promoCodeMessage">Promo code can be applied on the payment page</p>
            <button className="cartItems__promoCodeButton">
              <span>Proceed to Checkout</span><span className="cartItems__promoCodeButtonPrice">Rs.{store.getState().grandTotal}</span>
            </button>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Cart;

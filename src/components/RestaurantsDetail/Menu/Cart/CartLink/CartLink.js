import React, { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../../store/cart-context';

import './CartLink.css';

const CartLink = ({ mobile }) => {
  const { cartItems } = useContext(CartContext);

  const numOfItems = cartItems.reduce((prev, item) => prev + item.qty, 0);

  return (
    <div className={mobile ? 'cart-info__mobile' : 'cart-info__footer'}>
      <Link className="cart-info__footer-logo" to="/cart">
        <HiShoppingCart />
        <span className="logo-badge">{numOfItems}</span>
      </Link>
      <Link to="/cart" className="cart-info__footer-btn">
        View Cart
      </Link>
    </div>
  );
};

export default CartLink;

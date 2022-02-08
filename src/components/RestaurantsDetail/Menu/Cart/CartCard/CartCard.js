import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

import CartLink from '../CartLink/CartLink';
import './CartCard.css';

const CartCard = (props) => {
  return (
    <div className={props.checkout ? 'checkout' : 'cart'}>
      <div className={props.checkout ? '' : 'cart-card__container'}>
        <div className="cart-card">
          <div className="cart-info">
            <span className="cart-info__logo">
              <HiShoppingCart />
            </span>
            <h1 className="cart-info__heading">My Cart</h1>
          </div>
          <div className="cart-info__main">
            <div className="cart-info__restro-info">
              <div className="cart-info__img-container"></div>
              <div>
                <h1>{props.restaurantName}</h1>
                <p>{props.address}</p>
              </div>
            </div>
            {props.children}{' '}
          </div>
          {!props.checkout && <CartLink cartId={props.cartId} />}
          {props.checkout && (
            <div className="checkout-actions">
              <button className="checkout-cart__btn">Order Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;

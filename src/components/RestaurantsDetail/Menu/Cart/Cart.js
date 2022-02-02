import React, { useContext } from 'react';

import CartList from './CartList/CartList';
import './Cart.css';
import CartLink from './CartLink/CartLink';
import pandaImg from '../../../../Profile/panda.png';
import CartDropDown from './CartDropDown/CartDropDown';
import CartCard from './CartCard/CartCard';
import { CartContext } from '../../../../store/cart-context';

const Cart = ({ checkout }) => {
  const {
    cartItems,
    restaurantId,
    restaurantName,
    address,
    method,
    totalAmount,
  } = useContext(CartContext);

  return (
    <>
      {cartItems.length > 0 && (
        <CartCard
          restaurantName={restaurantName}
          address={address}
          checkout={checkout}
        >
          <CartList
            cartItems={cartItems}
            restaurantId={restaurantId}
            totalAmount={totalAmount}
            restaurantName={restaurantName}
            address={address}
            method={method}
          />
          <CartDropDown method={method} />
        </CartCard>
      )}
      {cartItems.length > 0 && !checkout && <CartLink mobile />}
      {cartItems.length === 0 && (
        <div className={checkout ? 'checkout-nocart' : 'nocart-img__container'}>
          <img src={pandaImg} alt="No Items In Cart" />
          <p>No Items In Cart Add Items</p>
        </div>
      )}
    </>
  );
};

export default Cart;

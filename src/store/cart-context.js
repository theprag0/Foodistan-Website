import React, { useReducer } from 'react';

export const CartContext = React.createContext({
  restaurantId: '',
  restaurantName: '',
  address: '',
  method: '',
  cartItems: [],
  totalAmount: 0,
  addItem: (cartData) => {},
  removeItem: (id) => {},
  updateItem: (updatedItemData) => {},
  replaceCartContext: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const restroInfo = {
      restaurantId: action.itemData.restaurantId,
      restaurantName: action.itemData.restaurantName,
      address: action.itemData.address,
      method: action.itemData.method,
    };

    const { cartItem } = action.itemData;

    //copied last state of cart context
    const updatedCartItems = [...state.cartItems];
    //checking existing item index in cartItems
    const existingCartItemIndex = updatedCartItems.findIndex(
      (c) => c.id === cartItem.id
    );

    const existingItem = updatedCartItems[existingCartItemIndex];

    //have two case ther is already a item or there is no item
    if (existingCartItemIndex >= 0) {
      const updatedCartItem = {
        ...existingItem,
        qty: existingItem.qty + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      //updating quantity by 1 and increase totalAmount + price
      return {
        ...restroInfo,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount + updatedCartItem.price,
      };
    } else {
      return {
        ...restroInfo,
        cartItems: [...updatedCartItems, cartItem],
        totalAmount: state.totalAmount + cartItem.price,
      };
    }
  }

  if (action.type === 'UPDATE') {
    const updatedCartItems = [...state.cartItems];

    const existingCartItem = updatedCartItems.findIndex(
      (c) => c.id === action.updateItemData.id
    );

    const foundCartItem = updatedCartItems[existingCartItem];

    //there are two ids for same product for eg waffle have different id for half customization 'waffle1-half' and 'waffle2-full'
    const idPreffix = foundCartItem.id.split('-')[0];

    let totalAmount = state.totalAmount;

    //reducing old price
    totalAmount -= foundCartItem.qty * foundCartItem.price;

    //updating items
    foundCartItem.id = `${idPreffix}-${action.updateItemData.customize}`;
    foundCartItem.customize = action.updateItemData.customize;
    foundCartItem.price = action.updateItemData.price;

    //adding new price
    totalAmount += foundCartItem.qty * action.updateItemData.price;

    return {
      ...state,
      totalAmount,
      cartItems: updatedCartItems,
    };
  }

  if (action.type === 'REMOVE') {
    //copying cartItems
    const updatedCartItems = [...state.cartItems];

    //finding existing itme index
    const existingCartItemIndex = updatedCartItems.findIndex(
      (c) => c.id === action.id
    );

    const updatedCartItem = updatedCartItems[existingCartItemIndex];

    //checking if cart quantity = 1 means permanently remove item or greater than 1 means update existing item
    if (updatedCartItem.qty === 1) {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.id),
        totalAmount: state.totalAmount - +updatedCartItem.price,
      };
    }
    if (updatedCartItem.qty > 1) {
      const updateItem = { ...updatedCartItem, qty: updatedCartItem.qty - 1 };
      updatedCartItems[existingCartItemIndex] = updateItem;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount - updatedCartItem.price,
      };
    }
  }

  if (action.type === 'REPLACE') {
    // returning initialState
    return {
      restaurantId: '',
      restaurantName: '',
      address: '',
      method: '',
      cartItems: [],
      totalAmount: 0,
    };
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    restaurantId: '',
    restaurantName: '',
    address: '',
    method: '',
    cartItems: [],
    totalAmount: 0,
  });

  const addItem = (itemData) => {
    dispatchCartState({ type: 'ADD', itemData: itemData });
  };

  const updateItem = (updateItemData) => {
    dispatchCartState({ type: 'UPDATE', updateItemData: updateItemData });
  };

  const removeItem = (id) => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };

  const replaceCart = () => {
    dispatchCartState({ type: 'REPLACE' });
  };

  const value = {
    ...cartState,
    addItem,
    removeItem,
    replaceCart,
    updateItem,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;

import Modal from './UI/Modal';
import crossImg from '../images/cross.svg';
import Button from './UI/Button';
import { useEffect, useState } from 'react';

const Cart = ({ closeModal, cartItems, cartActions }) => {
  const { addToCart, removeFromCart } = cartActions;
  console.log(cartItems);
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      return total + +item.price;
    }, 0);
  };

  const items = cartItems.map((item) => (
    <div className="cart__row">
      <img
        className="cart__photo"
        src={`${process.env.PUBLIC_URL}${item.imgPath}`}
        alt=""
      />
      <div className="cart__name">{item.name}</div>
      <div className="cart__price">{item.price}$</div>
      <div className="cart__delete">
        <img
          src={crossImg}
          alt=""
          onClick={(e) =>
            removeFromCart(e.target.parentNode.parentNode.children[1].innerHTML)
          }
        />
      </div>
    </div>
  ));
  console.log(items);

  return (
    <Modal closeModal={closeModal} className="cart">
      <div className="modal__title">Cart</div>
      <div className="cart__inner">
        <div className="cart__row">
          <div className="cart__photo">Photo</div>
          <div className="cart__name">Name</div>
          <div className="cart__price">Price</div>
          <div className="cart__delete">Delete</div>
        </div>
        {items[0] ? (
          items
        ) : (
          <div className="cart__empty">Your cart is empty</div>
        )}
      </div>
      <div className="cart__total">
        Total: {calculateTotalPrice(cartItems).toFixed(2)}$
      </div>
      <Button className="cart__order">Order</Button>
    </Modal>
  );
};

export default Cart;

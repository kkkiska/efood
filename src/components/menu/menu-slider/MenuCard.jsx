import Star from './Star';
import Button from '../../UI/Button';
import { useState } from 'react';
import Modal from '../../UI/Modal';

const MenuCard = ({
  name,
  price,
  imgPath,
  rating,
  inCart,
  actions,
  authState,
  openModal,
}) => {
  const [authUser, setAuthUser] = authState;
  const { addToCart, removeFromCart } = actions;
  const ratingArray = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingArray.push(<Star className="star-full" />);
  }
  if (rating > Math.floor(rating)) {
    ratingArray.push(<Star className="star-half" />);
  }
  for (let i = 0; i < 5 - Math.ceil(rating); i++) {
    ratingArray.push(<Star />);
  }

  const addtoCart = (props) => {
    if (authUser) {
      if (!inCart) {
        addToCart(props);
      } else {
        removeFromCart(props.name);
      }
    } else {
      openModal('notification-cart');
    }
  };

  return (
    <div className="menu-card">
      <div className="menu-card__img">
        <img src={`${process.env.PUBLIC_URL}${imgPath}`} alt="" />
        <div className="menu-card__rating">{ratingArray}</div>
      </div>
      <div className="menu-card__name">{name}</div>
      <div className="menu-card__price">${price}</div>
      <Button
        className="menu-card__button"
        onClick={() => addtoCart({ name, price, imgPath, rating })}
      >
        {inCart ? 'Remove' : 'Add to Cart'}
      </Button>
    </div>
  );
};

export default MenuCard;

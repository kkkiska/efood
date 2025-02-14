import Logo from '../UI/Logo';
import cartImg from '../../images/cart.svg';
import Button from '../UI/Button';
import menuBurger from '../../images/menu_burger.svg';
import React, { useState, useEffect } from 'react';
import SignUpForm from './SignUpForm';
import Modal from '../UI/Modal';
import Cart from '../Cart';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import userImg from '../../images/user.svg';

const Header = ({ cartItems, cartActions, authState }) => {
  const [modalState, setModalState] = useState('closed');
  const [burgerState, setBurgerState] = useState(false);
  const [authUser, setAuthUser] = authState;

  const headerHandler = () => {
    setBurgerState((prevState) => !prevState);
  };

  useEffect(() => {
    if (burgerState || modalState !== 'closed') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerState, modalState]);

  const openModalAuth = () => {
    setModalState('auth-open');
  };

  const closeModal = () => {
    setModalState('closed');
  };

  const openModalCart = () => {
    authUser ? setModalState('cart-open') : setModalState('auth-required');
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Logo />
          <div className={burgerState ? 'burgerActive' : 'header__panel'}>
            <li className="header__nav-item active">
              <a href="/">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Service</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Top cities</a>
            </li>
            <li className="header__nav-item">
              <a href="#">Contract</a>
            </li>
            <button className="header__actions" id="search">
              <SearchIcon />
            </button>
            <button
              className="header__actions"
              onClick={openModalCart}
              id="cart"
            >
              <CartIcon />
            </button>
            {!authUser ? (
              <Button className="header__button" onClick={openModalAuth}>
                Sign Up
              </Button>
            ) : (
              <div className="header__user" onClick={openModalAuth}>
                <div className="header__user-name">{authUser}</div>
                <img src={userImg} alt="" />
              </div>
            )}
          </div>
          <button className="header__burger" onClick={headerHandler}>
            <img src={menuBurger} alt="" />
          </button>
        </div>
      </header>
      {modalState === 'auth-open' && (
        <Modal
          closeModal={closeModal}
          className={authUser && 'modal__notification'}
        >
          <div className="modal__title">Authorisation</div>
          <SignUpForm authState={authState} />
        </Modal>
      )}
      {modalState === 'cart-open' && (
        <Cart
          closeModal={closeModal}
          cartItems={cartItems}
          cartActions={cartActions}
        />
      )}
      {modalState === 'auth-required' && (
        <Modal
          closeModal={closeModal}
          className={authUser === '' && 'modal__notification'}
        >
          <div className="modal__title">
            Please! Log in to access this feature
          </div>
        </Modal>
      )}
    </>
  );
};

export default Header;

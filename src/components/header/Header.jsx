import Logo from "../UI/Logo";
import cartImg from "../../images/cart.svg"
import Button from "../UI/Button"
import menuBurger from "../../images/menu_burger.svg"
import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import Modal from "../UI/Modal";
import Cart from "../Cart";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";

const Header = ({cartItems, cartActions}) => {
    const [modalIsOpenAuthState, openModalSwitchAuth] = useState(false)
    const [modalIsOpenCartState, openModalSwitchCart] = useState(false)
    const [burgerState, setBurgerState] = useState(false)

    const headerHandler = () => {
        setBurgerState((prevState) => !prevState);
    };

    useEffect(() => {
        if (burgerState || modalIsOpenAuthState || modalIsOpenCartState) {
            document.body.classList.add("no-scroll"); 
        } else {
            document.body.classList.remove("no-scroll"); 
        }
    }, [burgerState, modalIsOpenAuthState, modalIsOpenCartState]);

    const openModalAuth = () => {
        openModalSwitchAuth(true);
    }

    const closeModalAuth = () => {
        openModalSwitchAuth(false)
    }

    const openModalCart = () => {
        openModalSwitchCart(true)
    }

    const closeModalCart = () => {
        openModalSwitchCart(false)
    }

    return (
        <>
            <header className="header">
                <div className="header__inner">
                    <Logo />
                    <div className={burgerState ? "burgerActive" : "header__panel"}>
                        <li className="header__nav-item active"><a href="/">Home</a></li>
                        <li className="header__nav-item"><a href="#">Service</a></li>
                        <li className="header__nav-item"><a href="#">Top cities</a></li>
                        <li className="header__nav-item"><a href="#">Contract</a></li>
                        <button className="header__actions" id="search">
                            <SearchIcon />
                        </button>
                        <button className="header__actions" onClick={openModalCart} id="cart">
                            <CartIcon />
                        </button>
                        <Button className="header__button" onClick={openModalAuth}>Sign Up</Button>
                    </div>
                    <button className="header__burger" onClick={headerHandler}><img src={menuBurger} alt="" /></button>
                </div>
            </header>
            {modalIsOpenAuthState && 
                (<Modal closeModal={closeModalAuth}>
                    <div className="modal__title">Authorisation</div>
                    <SignUpForm />
                </Modal>)
            }
            {modalIsOpenCartState && <Cart closeModal={closeModalCart} cartItems={cartItems}  cartActions={cartActions}/>}
        </>
    )
}

export default Header;
import Button from './components/UI/Button';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MarkingText from './components/UI/MarkingText';
import delivryImg from './images/delivery.png';
import icon1 from './images/Resturent icon.png';
import icon2 from './images/Delivery icon.png';
import icon3 from './images/Timer icon.png';
import appStore from './images/appstore.svg';
import googlePlay from './images/googleplay.svg';
import app from './images/app.png';
import './styles/main.scss';
import Menu from './components/menu/Menu';
import SectionTitle from './components/UI/SectionTitle';
import PlacesContainer from './components/places/PlacesContainer';
import SubscribeInput from './components/SubscribeInput';
import { useEffect, useState } from 'react';
import MakeModal from './components/MakeModal';
import Feedback from './components/feedback/Feedback';

function App() {
  const [cartData, setCartData] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || []
  );
  const [authUser, setAuthUser] = useState(
    localStorage.getItem('authUser') || ''
  );
  const [modal, openModal] = useState('');

  const addToCart = (item) => {
    setCartData((prevCartData) => {
      const updatedCartData = { ...prevCartData };
      if (updatedCartData[authUser]) {
        updatedCartData[authUser] = [...updatedCartData[authUser], item];
      } else {
        updatedCartData[authUser] = [item];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCartData));
      console.log(updatedCartData);
      return updatedCartData;
    });
  };

  const removeFromCart = (itemName) => {
    setCartData((prevCartData) => {
      const updatedCartData = { ...prevCartData };
      if (updatedCartData[authUser]) {
        updatedCartData[authUser] = updatedCartData[authUser].filter(
          (cartItem) => cartItem.name !== itemName
        );
      }
      localStorage.setItem('cart', JSON.stringify(updatedCartData));
      console.log(updatedCartData);
      return updatedCartData;
    });
  };

  return (
    <>
      <Header
        cartItems={cartData[authUser] || []}
        cartActions={{ addToCart, removeFromCart }}
        authState={[authUser, setAuthUser]}
      />
      <div className="container">
        <main className="main">
          <section className="greeting">
            <div className="greeting__info">
              <h1 className="greeting__info-title">
                Super Fast <MarkingText>Food Delivery</MarkingText> Service
              </h1>
              <p className="greeting__info-description">
                We provide super fast-delivery service. Let’s use our services
                right now and get discounts of up to 50%
              </p>
              <div className="greeting__cta">
                <Button href={'#menu'} className=" greeting__cta-button">
                  Explore Food
                </Button>
                <a className="greeting__cta-link" href="#download">
                  Download App
                </a>
              </div>
            </div>
            <div className="greeting__illustration">
              <img src={`${process.env.PUBLIC_URL}/images/greeting.svg`}></img>
            </div>
          </section>
          <section className="menu" id="menu">
            <SectionTitle className="menu-title">
              Our Popular&nbsp;<MarkingText>Category</MarkingText>
            </SectionTitle>
            <Menu
              cartItems={cartData[authUser] || []}
              cartActions={{ addToCart, removeFromCart }}
              authState={[authUser, setAuthUser]}
              openModal={openModal}
            />
          </section>
          <section className="delivery">
            <img className="delivery__illustration" src={delivryImg} alt="" />
            <div className="delivery__information">
              <SectionTitle className="delivery__title">
                <MarkingText>Stay</MarkingText> At Home, We Will Provide{' '}
                <MarkingText>Good Food</MarkingText>
              </SectionTitle>
              <div className="delivery__description">
                We provide tasty food and superfast delivery at your home. Let’s
                use our services right now and get discounts of up to 50%.
              </div>
              <div className="delivery__item">
                <img src={icon3} alt="" />
                <div className="delivery__item-name">
                  fasted delivery in 30 Minutes
                </div>
              </div>
              <div className="delivery__item">
                <img src={icon2} alt="" />
                <div className="delivery__item-name">300+ delivery men</div>
              </div>
              <div className="delivery__item">
                <img src={icon1} alt="" />
                <div className="delivery__item-name">
                  500+ restaurant & cafe shop
                </div>
              </div>
              <button className="delivery__button">See More</button>
            </div>
          </section>
          <section className="places">
            <SectionTitle className="places__title">
              Top Food&nbsp;<MarkingText>Restaurant</MarkingText>
            </SectionTitle>
            <PlacesContainer />
          </section>
          <section className="download" id="download">
            <div className="download__info">
              <SectionTitle>
                Download Our <MarkingText>Mobile App</MarkingText>
              </SectionTitle>
              <p className="download__info-description">
                It's all at your fingertips -- the restaurants you love. Find
                the right food to suit your mood, and make the first bite last.
                Go ahead, download app and get 50% discount
              </p>
              <div className="download__info-actions">
                <a href="#">
                  <img src={appStore} alt="" />
                </a>
                <a href="#">
                  <img src={googlePlay} alt="" />
                </a>
              </div>
            </div>
            <img className="download__illustration" src={app} alt="" />
          </section>
          <Feedback />
          <section className="subscribe">
            <div className="subscribe__title">
              Subscribe to get the Latest Offer
            </div>
            <div className="subscribe__subtitle">
              Get our daily updates by subscribing to our newspaper, please drop
              your email below
            </div>
            <SubscribeInput />
          </section>
        </main>
        <Footer />
      </div>
      <MakeModal modalState={[modal, openModal]} />
    </>
  );
}

export default App;

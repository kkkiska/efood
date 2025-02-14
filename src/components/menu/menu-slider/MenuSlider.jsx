import React, { useState, useEffect } from 'react';
import { menuData } from '../menuData';
import MenuCard from './MenuCard';
import SliderArrow from '../tabs/images/SliderArrow';

const MenuSlider = ({
  category,
  cartItems,
  cartActions,
  currentIndex,
  setCurrentIndex,
  authState,
  openModal,
}) => {
  const items = menuData[category] || [];
  const isItemInCart = (itemName) =>
    cartItems.some((item) => item.name === itemName);

  const getCardsPerSlide = () => {
    if (window.innerWidth > 1440) return 5;
    if (window.innerWidth > 1220) return 4;
    if (window.innerWidth > 970) return 3;
    if (window.innerWidth > 620) return 2;
    return 1;
  };

  const getSliderWidth = () => {
    if (window.innerWidth > 1440) return 1150;
    if (window.innerWidth > 1220) return 920;
    if (window.innerWidth > 970) return 690;
    if (window.innerWidth > 620) return 460;
    return 230;
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const [sliderWidth, setSliderWidth] = useState(getSliderWidth());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
      setSliderWidth(getSliderWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(items.length / cardsPerSlide) - 1;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const cards = items.map((card) => (
    <MenuCard
      name={card.name}
      price={card.price}
      imgPath={card.img}
      rating={card.rating}
      inCart={isItemInCart(card.name)}
      actions={cartActions}
      authState={authState}
      openModal={openModal}
    />
  ));
  return (
    <>
      <div
        className="menu__slider"
        style={{
          width: `${sliderWidth}px`,
        }}
      >
        <div
          className="menu__slider-content"
          style={{
            transform: `translateX(-${currentIndex * sliderWidth}px)`,
          }}
        >
          {cards}
        </div>
      </div>
      {maxIndex ? (
        <div className="menu__slider-navigation">
          <button className="menu__slider-action_button" onClick={handlePrev}>
            <SliderArrow />
          </button>
          <div className="menu__slider__dots-list">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`menu__slider__dots-elem ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
          <button className="menu__slider-action_button" onClick={handleNext}>
            <SliderArrow />
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MenuSlider;

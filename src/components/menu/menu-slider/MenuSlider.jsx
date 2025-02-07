import React, { useState, useEffect } from "react";
import { menuData } from "../menuData"
import MenuCard from "./MenuCard"
import SliderArrow from "../tabs/images/SliderArrow";

const MenuSlider = ({category, cartItems, cartActions, currentIndex, setCurrentIndex}) => {
    const items = menuData[category] || [];
    const isItemInCart = (itemName) => cartItems.some(item => item.name === itemName);

    const maxIndex = Math.ceil(items.length / 4) - 1
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex < maxIndex ? prevIndex + 1 : 0
        );
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : maxIndex
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const cards = items.map(card => 
        <MenuCard 
                name={card.name} 
                price={card.price}
                imgPath={card.img}
                rating={card.rating}
                inCart={isItemInCart(card.name)}
                actions={cartActions}
        />
    )
    return (
        <>
            <div className="menu__slider">
                <div
                    className="menu__slider-content"
                    style={{
                        transform: `translateX(-${currentIndex * 930}px)`,
                    }}
                >
                    {cards}
                </div>  
            </div>
            {maxIndex ? <div className="menu__slider-navigation">
                <button className="menu__slider-action_button" onClick={handlePrev}><SliderArrow /></button>
                <div className="menu__slider__dots-list">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={`menu__slider__dots-elem ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></button>
                    ))}
                </div>
                <button className="menu__slider-action_button" onClick={handleNext}><SliderArrow /></button>
            </div> : ''}
        </>
    )
}

export default MenuSlider
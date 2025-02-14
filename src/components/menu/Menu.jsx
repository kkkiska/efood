import { useState } from 'react';
import TabsBar from './tabs/TabsBar';
import MenuSlider from './menu-slider/MenuSlider';

const Menu = ({ cartItems, cartActions, authState, openModal }) => {
  const [category, setCategory] = useState('Burger');
  const [currentIndex, setCurrentIndex] = useState(0);
  const TabHandler = (name) => {
    setCurrentIndex(0);
    setCategory(name);
  };

  return (
    <>
      <TabsBar category={category} TabHandler={TabHandler} />
      <MenuSlider
        category={category}
        cartItems={cartItems}
        cartActions={cartActions}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        authState={authState}
        openModal={openModal}
      />
    </>
  );
};

export default Menu;

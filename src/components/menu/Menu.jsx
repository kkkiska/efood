import { useState } from 'react'
import TabsBar from "./tabs/TabsBar"
import MenuSlider from "./menu-slider/MenuSlider"

const Menu = ({cartItems, cartActions}) => {
    const [category, setCategory] = useState('Burger')

    const TabHandler = (name) => {
        setCategory(name)
    }

    return (
        <>
            <TabsBar category={category} TabHandler={TabHandler} />
            <MenuSlider category={category} cartItems={cartItems} cartActions={cartActions} />
        </>
    )
}

export default Menu
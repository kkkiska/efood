import Star from "./Star"
import Button from "../../UI/Button"

const MenuCard = ({name, price, imgPath, rating, inCart, actions}) => {
    const {addToCart, removeFromCart} = actions
    const ratingArray = []
    for (let i = 0; i < Math.floor(rating); i++) {
        ratingArray.push(<Star className="star-full" />)
    }
    if (rating > Math.floor(rating)) {
        ratingArray.push(<Star className="star-half" />)
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
        ratingArray.push(<Star />)
    }

    const addtoCart = (props) => {
        if (!inCart) {
            addToCart(props);
        } else {
            removeFromCart(props.name);
        }
    }

    return (
        <div className="menu-card">
            <div className="menu-card__img">
                <img src={imgPath} alt="" />
                <div className="menu-card__rating">
                    {ratingArray}
                </div>
            </div>
            <div className="menu-card__name">{name}</div>
            <div className="menu-card__price">${price}</div>
            <Button className="menu-card__button" onClick={() => addtoCart({name, price, imgPath, rating})}>{inCart ? 'Remove' : 'Add to Cart'}</Button>
        </div>
    )
}

export default MenuCard 
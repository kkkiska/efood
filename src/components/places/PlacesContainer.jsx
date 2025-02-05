import PlacesItem from "./PlacesItem"
import { placesData } from "./placesData"

const PlacesContainer = () => {
    return (
        <div className="places__container">
            {placesData.map(place => 
                <PlacesItem
                    name={place.name}
                    workingTime={place.workingTime}
                    imgPath={place.imgPath}                 
                />
            )}
        </div>
    )
}

export default PlacesContainer
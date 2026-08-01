import PropertyAttribute from "../PropertyAttribute/PropertyAttribute"
import PropertyImage from "../PropertyImage/PropertyImage"
import "./Property.css"

 const Property = ({image, bedrooms, bathrooms, address, rent, surface, available, date, type}) => {
    return (
        <div className="property-card"
        style={{opacity: available ? 1 : 0.3}}
        >
            <PropertyImage image={image}>
                <p>Property</p>
                <p>{address}</p>
                property details
            </PropertyImage>
            <div><PropertyAttribute/></div>
        </div>
    )
 }

 export default Property
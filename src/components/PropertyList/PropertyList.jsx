import Property from "./Property/Property"
import "./PropertyList.css"

const PropertyList = ({properties}) => {
    return (
        <div className="property-list">
           {properties.map((property) => (
            <Property {...property} key={property.id}/>
           ))}
        </div>
    )
 }

 export default PropertyList
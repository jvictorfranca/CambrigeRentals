import "./PropertyImage.css"

const PropertyImage = ({image, children}) => {
    return (
        <div
        style={{backgroundImage: `url(${image})`}}
        className="property-image"
        >
            <p>image: {image}</p>
            {children}
        </div>
    )
 }

 export default PropertyImage
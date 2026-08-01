import "./PropertyAttribute.css"

const PropertyAttribute = ({text, color = "#444"}) => {

    const style = {color}
    return (
        <p style = {style} className="property-attribute">
            {text}
        </p>
    )
 }

 export default PropertyAttribute
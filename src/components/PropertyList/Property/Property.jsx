import PropertyAttribute from "../PropertyAttribute/PropertyAttribute"
import IconWithText from "../PropertyImage/IconWithText/IconWithText"
import PropertyBanner from "../PropertyImage/PropertyBanner/PropertyBanner"
import PropertyImage from "../PropertyImage/PropertyImage"
import PropertyTypeLabel from "../PropertyTypeLabel/PropertyTypeLabel"
import "./Property.css"
import {Bath, Bed, Maximize } from "lucide-react"

 const Property = ({image, bedrooms, bathrooms, address, rent, surface, available, date, type}) => {
    return (
        <div className="property-card"
        style={{opacity: available ? 1 : 0.4}}
        >
            <PropertyImage image={image}>
                <PropertyTypeLabel type={type} />
                { !available && <PropertyBanner/> }
                <div className="property-info">
                    <IconWithText Icon={Bed} text={bedrooms} />
                    <span>|</span>
                    <IconWithText Icon={Bath} text={bathrooms} />
                    <span>|</span>
                    <IconWithText Icon={Maximize} text={`${surface} m²S`} />
                </div>
            </PropertyImage>
            <div>
                <PropertyAttribute text={address}/>
                <PropertyAttribute text={`$${rent} / month`} color={"green"}/>
                <PropertyAttribute text={`Available from ${date}`}/>
            </div>
        </div>
    )
 }

 export default Property
import "./Footer.css"
import {Clock} from 'lucide-react'

const Footer = () => {
    const openningHour = 9
    const closingHour = 17
    const now = new Date()
    const currentHour = now.getHours()
    const currentDay = now.getDay()

    const isWeekday = currentDay >=1 && currentDay <=5
    let isOpenned = isWeekday && currentHour >= openningHour && currentHour <= closingHour



    const openElement = (
        <>
        <div className="message">
            <Clock className="icon"/>
            <span className="status open">We are open now!</span>

        </div>
            <div>Call us at: <strong>(12)3456-7890</strong></div>
        </>

    )
        const closeElement = (
        <>
        <div className="message">
              <Clock className="icon"/>
            <span className="status closed">We are closed now!</span>
        </div>
            <div>Openning hours: : <strong>Mon to Fry, 9:00 to 17:00</strong></div>
        </>
    )

    return (
        <footer className="footer">
            {isOpenned ? openElement : closeElement}
        </footer>
    )
 }

 export default Footer
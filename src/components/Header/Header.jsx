import "./Header.css"
import { House, Phone, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="header">
            <div className="item">
                <House className="icon"/>
                <span>Cambrige Rentals</span>
            </div>
            <div className="item">
                <Phone className="icon"/>
                <span>12 3456-7890</span>
            </div>
            <div className="item">
                <Mail className="icon"/>
                <span>jvictorfranca@yahoo.com.br</span>
            </div>
        </header>
    )
 }

 export default Header
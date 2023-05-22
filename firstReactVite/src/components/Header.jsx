import './Header.css';
import menutop from "../assets/images/menu-top-xs.png";
import logoiron from "../assets/images/ironhack-logo-xs.png";

function Header() {
    return(
    <div className="header">
      <img src={logoiron} alt="logo" /> 
      <img src={menutop} alt="menutop" /> 
    </div>);
}

export default Header;
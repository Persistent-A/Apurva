// icon
import { MdOutlineDarkMode } from "react-icons/md"
import logo from "../images/apurva-logo.png"

import Hamburger from "./Hamburger"

const Header = () => {

  return (
    <nav className="header">
        <div>
          <img className="logo" src={logo} alt=''/>
        </div>
        <Hamburger />
        <ul className="menu">
            <li><a href="#about-container" rel="norefferal">About</a></li>
            <li>Project</li>
            <li>Resume</li>
        </ul>
        < MdOutlineDarkMode className="dark-theme-toggler"/>
    </nav>
  )
}

export default Header

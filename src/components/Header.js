// icon
import { MdOutlineDarkMode } from "react-icons/md"
import logo from "../images/apurva-logo.png"

import Hamburger from "./Hamburger"

const Header = () => {

  const toggleHamburger = () => {
    const hamIcon = document.querySelector('.hamburger-icon')
    const menu = document.querySelector('.menu')
    menu.className === 'menu' ? menu.className += ' menu-toggle' : menu.className = 'menu'
    hamIcon.className === 'hamburger-icon' ? hamIcon.className += ' cross' : hamIcon.className = 'hamburger-icon'
  }

  return (
    <nav className="header">
        <div>
          <img className="logo" src={logo} alt=''/>
        </div>
        <Hamburger />
        <ul className="menu">
            <li onClick={toggleHamburger}><a href="#about-container" rel="norefferal">About</a></li>
            <li onClick={toggleHamburger}>Project</li>
            <li onClick={toggleHamburger}>Resume</li>
        </ul>
        < MdOutlineDarkMode className="dark-theme-toggler"/>
    </nav>
  )
}

export default Header

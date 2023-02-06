import { FiGithub } from "react-icons/fi"
import { ImLinkedin2 } from "react-icons/im"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Links = () => {
  return (
    <div className="social_links_container">
      <div className="social_links">
        <a href="https://github.com/Persistent-A" target="_blank" rel="noopener noreferrer"><FiGithub/></a>
        <a href="https://www.linkedin.com/in/apurva-sharma-70509674/" target="_blank" rel="noopener noreferrer"><ImLinkedin2/></a>
        <a href="https://www.instagram.com/_apurva__sharma__/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href="https://twitter.com/__ApurvaSharma" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
      </div>
      <hr className="h-rule"/>
    </div>
  )
}

export default Links

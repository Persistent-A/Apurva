// icons
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs"

const Work = (props) => {
  return (
    <div className="project">
        <div>
            <img className="for-doctors" src={props.src1} alt=''/>
            <img className="mobile-view" src={props.src2} alt=''/>
        </div>
        <div>
            <img className="desktop-view" src={props.src} alt=''/>
            <div className="project-description">
                <div>
                    {props.p_description}
                </div>
                <div className="project-links">
                    <a href={props.web_link} target='_blank' rel="noopener noreferrer"><BsBoxArrowUpRight /></a>
                    <a href={props.git_link} target='_blank' rel="noopener noreferrer"><BsGithub /></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Work
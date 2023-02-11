// icons
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs"

const Work = (props) => {
  return (
    <div className="project">
        <div>
            <h1>{props.p_name}</h1>
            <img className="for-doctors move" src={props.src1} alt=''/>
            <img className="mobile-view move" src={props.src2} alt=''/>
        </div>
        <div>
            <img className="desktop-view move" src={props.src} alt=''/>
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
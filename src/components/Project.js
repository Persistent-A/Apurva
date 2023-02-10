import hmsMobile from "../images/hms_mobile.png"    
import hmsDesktop from "../images/hms-background.png"
import forDoctors from "../images/Fordoctors.png"

// icons
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs"

const Project = () => {
  return (
    <div className="project">
        <div>
            <img className="for-doctors" src={forDoctors} alt=''/>
            <img className="mobile-view" src={hmsMobile} alt=''/>
        </div>
        <div>
            <img className="desktop-view" src={hmsDesktop} alt=''/>
            <div className="project-description">
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div className="project-links">
                <BsBoxArrowUpRight />
                <BsGithub />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Project












 // <div className="project">
    //   <div className="project-title">Hospital Management System</div>
    //   <div className="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
    //   <div className="project-images-tech">
    //     <img className="project-desktop-view" src={hmsDesktop} alt=''/>
    //     <img className="project-mobile-view" src={hmsMobile} alt=''/>
    //     <div className="project-tools-links">
    //         <div className="project-tools">
    //             <p>React</p>   <p>Redux</p> <p>Material UI</p>  <p>Node JS</p> <p>Express</p>  <p>MongoDB</p> </div>
    //         <div className="project-links">
    //             <BsBoxArrowUpRight />
    //             <BsGithub />
    //         </div>
    //     </div>
    //   </div>
    //   <div className="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
    // </div>
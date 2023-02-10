import src from "../images/hms-background.png"
import src1 from "../images/Fordoctors.png"
import src2 from "../images/hms_mobile.png"

import Project from "./Project"
const Work = () => {
    const projects = [
        {
            src: src,
            src1: src1,
            src2: src2,
            alt:'hms',
            p_name: 'Hospital Management System',
            p_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        }
    ]
  return (
    <div className="work">
        {projects.map((pro)=>
        <>
            <div key={pro.alt}>
                <Project
                alt={pro.alt}
                src={pro.src}
                src1={pro.src1}
                src2={pro.src2}
                p_name={pro.p_name}
                p_description={pro.p_description}
                web_link={pro.web_link}
                git_link={pro.git_link}
                />
            </div>
        </>
        
        )}
      
    </div>
  )
}

export default Work

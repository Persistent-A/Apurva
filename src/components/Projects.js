// HMS Static Assets
import hmsBack from "../images/hms/hms-background.png"
import hmsForDoc from "../images/hms/Fordoctors.png"
import hmsMobile from "../images/hms/hms_mobile.png"

// BookArena Static Assets
import bookBack from "../images/bookAr/BookArenaFront.png"
import bookDesk from "../images/bookAr/bookArenaSecond.png"
import bookMobile from "../images/bookAr/bookArenaMobile.png"

// WeDesign Static Assets
import wdBack from "../images/WeDes/WeDesignSecond.png"
import wdDesk from "../images/WeDes/WeDesignFront.png"
import wdMobile from "../images/WeDes/WeDesignMobile.png"

// TicTacToe Static Assets
import ttBack from "../images/tictactoe/tttDesktop.png"
import ttDesk from "../images/tictactoe/tttPlayer.png"
import ttMobile from "../images/tictactoe/tttMobile.png"

// Components
import Work from "./Work"

// Hooks
import { useState } from "react"

// Icons
import { BsCaretLeftFill,BsFillCaretRightFill } from 'react-icons/bs'

const Projects = () => {
    const [projectIndex, setProjectIndex] =useState(0)
    console.log(projectIndex)

    const projects = [
        {
            src: hmsBack,
            src1: hmsForDoc,
            src2: hmsMobile,
            alt:'hms',
            p_name: 'Hospital Management System',
            p_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: bookBack,
            src1: bookDesk,
            src2: bookMobile,
            alt:'book',
            p_name: 'bookArena',
            p_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: wdBack,
            src1: wdDesk,
            src2: wdMobile,
            alt:'weDesign',
            p_name: 'WeDesign',
            p_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: ttBack,
            src1: ttDesk,
            src2: ttMobile,
            alt:'TicTacToe',
            p_name: 'Tic Tac Toe    ',
            p_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        }
    ]

    const moveBackWard = () => {
        if (projectIndex > 0) {
            setProjectIndex(projectIndex-1)
        }
    }

    const moveForward = () => {
        if (projectIndex < 3) {
            setProjectIndex(projectIndex+1)
        }
    }

  return (
    <div className="work">
        <div onClick={moveBackWard}><BsCaretLeftFill/></div>
        <div>
            <Work
            alt={projects[projectIndex].alt}
            src={projects[projectIndex].src}
            src1={projects[projectIndex].src1}
            src2={projects[projectIndex].src2}
            p_name={projects[projectIndex].p_name}
            p_description={projects[projectIndex].p_description}
            web_link={projects[projectIndex].web_link}
            git_link={projects[projectIndex].git_link}
            />
        </div>
        <div onClick={moveForward}><BsFillCaretRightFill/></div>
    </div>
  )
}

export default Projects

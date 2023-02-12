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
import { useEffect, useState } from "react"

// Icons
import { BsChevronDoubleLeft,BsChevronDoubleRight } from 'react-icons/bs'

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0)

    useEffect( ()=> {
        const mainImage = document.querySelector('.for-doctors')
        const mobileView = document.querySelector('.mobile-view')
        const desktopView = document.querySelector('.desktop-view')
        mainImage.className += ' move'
        mobileView.className += ' move'
        desktopView.className += ' move'
        setTimeout(() => {
            const mainImage = document.querySelector('.for-doctors')
            const mobileView = document.querySelector('.mobile-view')
            const desktopView = document.querySelector('.desktop-view')
            mainImage.className = 'for-doctors'
            mobileView.className = 'mobile-view'
            desktopView.className = 'desktop-view'
        }, 1000)
    }, [projectIndex])

    const projects = [
        {
            src: hmsBack,
            src1: hmsForDoc,
            src2: hmsMobile,
            alt:'hms',
            p_name: 'Hospital Management System',
            p_description: "Application is able to store patient details in a database using MongoDB, which is used to book appointments in hospitals, further, those appointments are retrieved by respective field doctors to check for the schedules after logging in.",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: bookBack,
            src1: bookDesk,
            src2: bookMobile,
            alt:'book',
            p_name: 'bookArena',
            p_description: "CRUD operations concerning information about books can be performed on the app. The app can be used to filter the books in the library based on price range.",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: wdDesk,
            src1: wdBack,
            src2: wdMobile,
            alt:'weDesign',
            p_name: 'WeDesign',
            p_description: "Built a sample website having different layouts such as a carousel drawer.",
            web_link: 'https://hms-7lax.onrender.com',
            git_link: 'https://github.com/Persistent-A/MERN',
        },
        {
            src: ttBack,
            src1: ttDesk,
            src2: ttMobile,
            alt:'TicTacToe',
            p_name: 'Tic Tac Toe    ',
            p_description: "The game enables users to change player2 mode as well as player name change, beside these it also tracks the count of game played and draw count.",
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
        <div onClick={moveBackWard}><BsChevronDoubleLeft/></div>
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
        <div onClick={moveForward}><BsChevronDoubleRight/></div>
    </div>
  )
}

export default Projects

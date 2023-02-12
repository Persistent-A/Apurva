// import components
// import Main from "./components/Main";
import About from "./components/About"
// import Education from "./components/Education"
import Projects from "./components/Projects";
import Header from "./components/Header"
import Home from  "./components/Home"
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
// import Links from "./components/Links";
// import Mail from "./components/Mail"

function App() {
  const [lastPosition, setLastPosition] = useState(window.pageYOffset)
  
  useEffect(()=>{
    window.addEventListener('scroll', () => {
    let currentPostiton = window.pageYOffset
    if (currentPostiton > lastPosition) {
      const header = document.querySelector('.header')
      header.className += ' moveUp'
      setLastPosition(currentPostiton)
    }
    else {
      const header = document.querySelector('.header')
      header.className = 'header'
    } 
    })
  }, [lastPosition])

  return (
    <div className="App">
      <Header />
      <Home/>
      <About/>
      {/* <Mail /> */}
      {/* <Links /> */}
      {/* <Main /> */}
      {/* <Education/> */}
      {/* <Project /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

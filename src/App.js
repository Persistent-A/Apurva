// import components
// import Main from "./components/Main";
import About from "./components/About"
// import Education from "./components/Education"
import Projects from "./components/Projects";
import Header from "./components/Header"
import Home from  "./components/Home"
// import Links from "./components/Links";
// import Mail from "./components/Mail"

function App() {
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
    </div>
  );
}

export default App;

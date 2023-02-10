// import components
// import Main from "./components/Main";
import About from "./components/About"
// import Education from "./components/Education"
import Project from "./components/Project";
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
      <Project />
    </div>
  );
}

export default App;

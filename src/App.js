import "./App.css"
import Navbar from "./components/NavBar/navbar";
import Main from "./components/Main/main";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Place from "./components/Place/place";
import Footer from "./components/Footer/footer";
import Links from "./components/Links/links";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Skills/>
      <Works/>
      <Place/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;

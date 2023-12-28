import NavigationBar from "./components/NavigationBar/navigationbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Intro />
      <Skills />
      <Works />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

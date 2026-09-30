import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Hero from "./components/views/Hero/Hero";
import About from "./components/views/About/About";
import Experience from "./components/views/Experince/Experience";
import Projects from "./components/views/Projects/Projects";

import "./App.css";
import "./assets/css/Buttons.css";
import Contact from "./components/views/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Contact/>

      <Footer/>
    </>
  );
};

export default App;

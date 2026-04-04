import "./output.css";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Certification from "./components/Certifications/certifications";
import Experience from "./components/Experience/Experience";
import Social from "./components/Social/social";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Experience />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

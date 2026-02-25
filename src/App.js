import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Experience} from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Audit from "./components/Audit";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Audit />
      <Work />
      <Skills />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

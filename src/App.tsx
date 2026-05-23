import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
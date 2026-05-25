import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">NB</div>

      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="socials">

         <a
          href="https://github.com/Neval-B"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

         <a
          href="https://www.linkedin.com/in/neval-babu/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
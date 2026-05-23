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
        <FaGithub />
        <FaLinkedin />
      </div>
    </header>
  );
}

export default Navbar;
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        NB
      </a>

      <nav className="nav-menu">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
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
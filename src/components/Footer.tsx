import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <strong>Neval Babu</strong>
        <span>Junior Software Engineer</span>
      </div>

      <p>Built with React and TypeScript · © 2026</p>

      <div className="footer-actions">
        <a
          href="https://github.com/Neval-B"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Neval Babu on GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/neval-babu/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Neval Babu on LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a href="#home" className="back-to-top">
          Back to top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

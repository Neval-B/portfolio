import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let&apos;s Connect</h2>

      <p>
        Feel free to contact me about software development roles, projects or
        opportunities.
      </p>

      <div className="contact-links">
        <a href="mailto:Neval271@gmail.com">
          <FaEnvelope />
          Open Email
        </a>

        <a
          href="https://www.linkedin.com/in/neval-babu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
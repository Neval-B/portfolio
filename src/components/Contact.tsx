import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-decoration contact-decoration-one" />
      <div className="contact-decoration contact-decoration-two" />

      <div className="contact-content">
        <span className="contact-label">Get in touch</span>

        <h2>Let&apos;s Connect</h2>

        <p className="contact-description">
          Feel free to contact me about software development roles, projects,
          collaborations or other opportunities.
        </p>

        <div className="contact-links">
          <a
            className="contact-link email-link"
            href="mailto:Neval271@gmail.com"
          >
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <span className="contact-link-text">
              <small>Email</small>
              <strong>Open Email</strong>
            </span>

            <FaArrowRight className="contact-arrow" />
          </a>

          <a
            className="contact-link linkedin-link"
            href="https://www.linkedin.com/in/neval-babu/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <FaLinkedin />
            </span>

            <span className="contact-link-text">
              <small>Professional profile</small>
              <strong>LinkedIn</strong>
            </span>

            <FaArrowRight className="contact-arrow" />
          </a>

          <a
            className="contact-link github-link"
            href="https://github.com/Neval-B"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <FaGithub />
            </span>

            <span className="contact-link-text">
              <small>View my code</small>
              <strong>GitHub</strong>
            </span>

            <FaArrowRight className="contact-arrow" />
          </a>
        </div>

        <div className="contact-availability">
          <span className="availability-dot" />

          <p>Open to software development opportunities</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
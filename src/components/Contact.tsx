import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import type { CSSProperties } from "react";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-decoration contact-decoration-one" />
      <div className="contact-decoration contact-decoration-two" />

      <div className="contact-content">
        <span className="contact-label" data-reveal>Get in touch</span>

        <h2 data-reveal style={{ "--reveal-delay": "80ms" } as CSSProperties}>
          Let&apos;s Connect
        </h2>

        <p
          className="contact-description"
          data-reveal
          style={{ "--reveal-delay": "150ms" } as CSSProperties}
        >
          I&apos;m open to junior software engineering and full-stack development
          opportunities across Leicester, the Midlands and remote UK teams.
          Feel free to contact me about a role, project or collaboration.
        </p>

        <div className="contact-links">
          <a
            className="contact-link email-link"
            href="mailto:Neval271@gmail.com"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as CSSProperties}
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
            data-reveal
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
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
            data-reveal
            style={{ "--reveal-delay": "380ms" } as CSSProperties}
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

        <div
          className="contact-availability"
          data-reveal
          style={{ "--reveal-delay": "440ms" } as CSSProperties}
        >
          <span className="availability-dot" />

          <p>Available for junior software engineering opportunities</p>
        </div>

        <p className="contact-signoff" aria-hidden="true">
          Let&apos;s build <span>something memorable.</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;

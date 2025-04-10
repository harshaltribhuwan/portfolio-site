// src/pages/Contact.jsx
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <Fade direction="up" triggerOnce>
        <h1 className="section-title">📬 Contact Me</h1>
        <p className="contact-prompt">
          I'm always open to cool collaborations, interesting ideas, or just a
          good conversation.
        </p>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:harshaltribhuwan07@gmail.com">
              harshaltribhuwan12345@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FaGithub />
            <a
              href="https://github.com/harshaltribhuwan"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/harshaltribhuwan
            </a>
          </div>
        </div>
      </Fade>

      <Fade direction="up" delay={400} triggerOnce>
        <p className="closing-line">
          Whether you're a founder, a dev, or just curious — drop a message
          anytime!
        </p>
      </Fade>
    </div>
  );
};

export default Contact;

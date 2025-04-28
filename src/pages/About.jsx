import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaGithub,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiChartdotjs,
  SiPostman,
  SiJira,
} from "react-icons/si";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Fade direction="up" triggerOnce duration={600}>
        <h1 className="section-title">About Me</h1>
        <p className="summary">
          I’m a <strong>Frontend Engineer</strong> with{" "}
          <strong>3.4+ years</strong> of experience building scalable, data-rich
          interfaces for industrial platforms. From architecting complex
          dashboards to making every pixel match Figma, I care about code
          quality, performance, and user experience.
        </p>
      </Fade>

      <div className="section">
        <Fade direction="up" triggerOnce duration={600}>
          <h2>Tech Stack</h2>
        </Fade>

        <div className="tech-icons">
          {[
            { Icon: FaReact, title: "React.js" },
            { Icon: SiRedux, title: "Redux / Redux-saga" },
            { Icon: SiNextdotjs, title: "Next.js" },
            { Icon: FaJs, title: "JavaScript" },
            { Icon: FaSass, title: "SCSS" },
            { Icon: FaGithub, title: "Github" },
            { Icon: FaCss3Alt, title: "CSS" },
            { Icon: SiTailwindcss, title: "Tailwind CSS" },
            { Icon: SiChartdotjs, title: "amCharts / Recharts" },
            { Icon: FaGitAlt, title: "Git" },
            { Icon: SiPostman, title: "Postman" },
            { Icon: SiJira, title: "Jira" },
          ].map(({ Icon, title }, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.05}
            >
              <Icon title={title} />
            </Tilt>
          ))}
        </div>
      </div>

      <div className="section">
        <Fade direction="up" triggerOnce duration={600}>
          <h2>Experience Snapshot</h2>
          <ul className="experience-list">
            <li>
              Led frontend development for <strong>SmartSense</strong> at{" "}
              <strong>Ecolibrium</strong> – an AI/ML-powered IoT platform.
            </li>
            <li>
              Built high-performance dashboards using{" "}
              <strong>React.js, Redux, amCharts, Recharts</strong>.
            </li>
            <li>
              Boosted performance by <strong>50–60%</strong> with memoization,
              lazy loading, and virtualization.
            </li>
            <li>
              Followed accessibility and design fidelity using{" "}
              <strong>WCAG, ARIA, Figma</strong>.
            </li>
            <li>
              Mentored peers and collaborated using{" "}
              <strong>Git, Jira, Postman</strong>.
            </li>
          </ul>
        </Fade>
      </div>

      <div className="section">
        <Fade direction="up" triggerOnce duration={600}>
          <h2>Passion Projects</h2>
          <p>
            Over the past three years, I've built 35+ side projects, like AI
            Resume Critics, snappy OTP components, and full clones of
            Gmail/Snapchat using React.js, Redux, Firebase, and Material-UI.
          </p>
          <p>
            My portfolio includes animation-rich UI explorers, complex data
            visualization tools, and UX-focused micro-interactions.
          </p>
          <p className="github-cta">
            👉 Check out all my open-source work on{" "}
            <a
              href="https://github.com/harshaltribhuwan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            .
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;

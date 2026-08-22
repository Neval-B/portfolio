import {
  FaAndroid,
  FaCloud,
  FaCss3Alt,
  FaDocker,
  FaGamepad,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaKey,
  FaNetworkWired,
  FaPlug,
  FaProjectDiagram,
  FaPython,
  FaTasks,
  FaTerminal,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiGitlab,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSpring,
  SiSwagger,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";
import type { CSSProperties, PointerEvent } from "react";
import "./Home.css";

const skills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaNetworkWired />, name: "REST APIs" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <FaKey />, name: "JWT" },
  { icon: <SiSpring />, name: "Spring MVC" },
  { icon: <SiSpring />, name: "Spring Boot" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSwagger />, name: "Swagger" },
  { icon: <SiVitest />, name: "Vitest" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <FaAndroid />, name: "Android Studio" },
  { icon: <SiMysql />, name: "SQL" },
  { icon: <FaGamepad />, name: "Pygame" },
  { icon: <FaCloud />, name: "Azure" },
  { icon: <FaPlug />, name: "WebSockets" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiGitlab />, name: "GitLab" },
  { icon: <FaTasks />, name: "Agile" },
  { icon: <FaProjectDiagram />, name: "SDLC" },
  { icon: <FaTerminal />, name: "Shell Scripting" },
];

function Home() {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
  };

  return (
    <section id="home" className="home" onPointerMove={handlePointerMove}>
      <div className="home-decoration home-decoration-one" aria-hidden="true" />
      <div className="home-decoration home-decoration-two" aria-hidden="true" />

      <div className="home-content">
        <div className="hero-copy" data-reveal>
          <p className="portfolio-text">Portfolio · 2026</p>

          <h1>
            Hi, I&apos;m <span>Neval Babu</span>
          </h1>

          <h2>Junior Software Engineer</h2>

          <p className="description">
            I&apos;m a First-Class Computer Science graduate building reliable,
            user-focused software with React, TypeScript, Java and Node.js. My
            experience spans full-stack development, backend APIs, cloud systems
            and interactive desktop applications.
          </p>

          <div className="buttons">
            <a href="#projects">Explore Projects</a>
            <a href="/Neval_Babu_CV.pdf" target="_blank" rel="noreferrer">
              View CV
            </a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <aside
          className="hero-panel"
          aria-label="Professional summary"
          data-reveal
          style={{ "--reveal-delay": "160ms" } as CSSProperties}
        >
          <span className="hero-panel-number">01</span>
          <p>Based in Leicester, UK</p>
          <strong>Building practical software with thoughtful details.</strong>
          <span className="hero-status">
            <i aria-hidden="true" /> Open to junior software roles
          </span>

          <div className="hero-console" aria-hidden="true">
            <span><i /> portfolio.status</span>
            <code>ready_to_build()</code>
          </div>
        </aside>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>

        <div className="skills-title" data-reveal>
          <span>02</span>
          <h3>Tech Stack &amp; Skills</h3>
        </div>

        <div className="skills">
          {skills.map((skill, index) => (
            <div
              className="card"
              key={skill.name}
              data-reveal
              style={{ "--reveal-delay": `${Math.min(index * 55, 385)}ms` } as CSSProperties}
            >
              <span aria-hidden="true">{skill.icon}</span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

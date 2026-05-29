import {
  FaJava,
  FaPython,
  FaAndroid,
  FaDocker,
  FaUsers,
  FaGamepad,
  FaCloud,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiSpring,
  SiMysql,
  SiPostman,
  SiSwagger,
  SiRedis,
  SiGitlab,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      subtitle: "Personal portfolio built with React and TypeScript",
      icon: <FaCode />,
      description:
        "A personal portfolio website built using Vite, React and TypeScript to showcase my skills, projects and contact information.",
      tech: ["Vite", "React", "TypeScript", "CSS", "GitHub"],
      highlights: [
        "Built a responsive portfolio layout",
        "Added skill icons and modern project cards",
        "Implemented smooth scrolling and active navbar highlighting",
      ],
      icons: [<SiVite />, <SiReact />, <SiTypescript />, <FaGithub />],
      repoLink: "https://github.com/Neval-B/portfolio",
      demoLink: "https://neval-babu-portfolio.netlify.app",
    },
    {
      title: "IBM SkillsBuild Companion App",
      subtitle: "Gamified learning web application",
      icon: <FaUsers />,
      description:
        "Developed a gamified web application for IBM SkillsBuild within an 8-member team to create a more engaging learning experience.",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "GitLab", "Agile"],
      highlights: [
        "Built backend services and application functionality",
        "Configured MySQL for secure structured data storage",
        "Led Agile sprint activities as Scrum Master",
      ],
      icons: [<FaJava />, <SiSpring />, <SiMysql />, <SiGitlab />],
    },
    {
      title: "University Timetable Management System",
      subtitle: "Backend API and Android application",
      icon: <FaAndroid />,
      description:
        "Built a timetable management system to manage modules, sessions and convenor data through backend APIs and an Android interface.",
      tech: [
        "Java",
        "Spring MVC",
        "REST APIs",
        "Swagger",
        "Postman",
        "Android Studio",
      ],
      highlights: [
        "Created REST APIs for timetable data management",
        "Used Swagger/OpenAPI and Postman for testing",
        "Built Android UI using Java and RecyclerView",
      ],
      icons: [<FaJava />, <SiSpring />, <SiSwagger />, <SiPostman />, <FaAndroid />],
    },
    {
      title: "Private Cloud Whiteboard",
      subtitle: "Cloud-based collaborative whiteboard",
      icon: <FaCloud />,
      description:
        "Distributed a shared interactive whiteboard application across multiple Microsoft Azure App Service nodes.",
      tech: ["Azure", "WebSocket", "Redis Cache", "Docker", "Cloud Scaling"],
      highlights: [
        "Integrated Azure Web PubSub for WebSocket communication",
        "Used Redis Cache for state synchronisation",
        "Applied Docker containers for horizontal scaling",
      ],
      icons: [<FaCloud />, <SiRedis />, <FaDocker />, <FaDatabase />],
    },
    {
      title: "Scrabble Game",
      subtitle: "Python game with custom logic",
      icon: <FaGamepad />,
      description:
        "Developed an interactive Scrabble game supporting both player-versus-player and player-versus-computer gameplay modes.",
      tech: ["Python", "Pygame", "OOP", "DAWG", "Game Logic"],
      highlights: [
        "Applied object-oriented programming principles",
        "Integrated DAWG-based word validation",
        "Implemented custom scoring and gameplay logic",
      ],
      icons: [<FaPython />, <FaGamepad />],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>
          A collection of academic and practical software projects covering
          backend development, cloud systems, Android development and game
          programming.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <div className="project-main-icon">{project.icon}</div>

              <div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="project-icon-row">
              {project.icons.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </div>

            {project.repoLink && project.demoLink && (
              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noreferrer">
                  <FaGithub />
                  Repo
                </a>

                <a href={project.demoLink} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
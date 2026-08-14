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
  FaFutbol,
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
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrabbleScreenshots = [
    "/images/scrabble/scrab-1.jpg",
    "/images/scrabble/scrab-2.jpg",
    "/images/scrabble/scrab-3.jpg",
    "/images/scrabble/scrab-4.jpg",
    "/images/scrabble/scrab-5.jpg",
    "/images/scrabble/scrab-6.jpg",
    "/images/scrabble/scrab-7.jpg",
    "/images/scrabble/scrab-8.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex(
      (previousIndex) =>
        (previousIndex + 1) % scrabbleScreenshots.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((previousIndex) =>
      previousIndex === 0
        ? scrabbleScreenshots.length - 1
        : previousIndex - 1
    );
  };

  const projects = [
    {
      title: "PitchBrief",
      icon: <FaFutbol />,
      description:
        "A full-stack football application that allows users to create accounts, explore football clubs and manage their favourite teams through a React frontend and REST API.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "REST APIs",
        "Unit Testing",
      ],
      highlights: [
        "Built a full-stack football news platform using React, TypeScript, Express and PostgreSQL",
        "Implemented secure user authentication with JWT, protected routes and encrypted passwords",
        "Designed and managed a PostgreSQL database using Prisma ORM with relational data models",
        "Developed favourite clubs and article bookmarking features with RESTful CRUD APIs",
        "Integrated live football news from RSS feeds and automated updates with a background scheduler",
        "Added unit tests to verify important application functionality",
        "Deployed the frontend on Netlify and the backend on Railway",
      ],
      icons: [
        <SiReact />,
        <SiTypescript />,
        <SiNodedotjs />,
        <SiExpress />,
        <SiPostgresql />,
        <SiPrisma />,
      ],
      demoLink: "https://pitchbrief.netlify.app/",
    },
    {
  title: "Portfolio Website",
  icon: <FaCode />,
  description:
    "A responsive personal portfolio website developed using React, TypeScript and Vite to showcase my technical skills, software projects and professional profile.",
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "Responsive Design",
    "Netlify",
    "GitHub",
  ],
  highlights: [
    "Built a component-based frontend using React and TypeScript to create reusable and maintainable page sections",
    "Developed responsive layouts using CSS media queries to support desktop, tablet and mobile screen sizes",
    "Created interactive project showcases with technology badges, external links and a screenshot carousel",
    "Used GitHub for version control and deployed the production website through Netlify",
  ],
  icons: [
    <SiVite />,
    <SiReact />,
    <SiTypescript />,
    <FaGithub />,
  ],
  repoLink: "https://github.com/Neval-B/portfolio",
  demoLink: "https://neval-babu-portfolio.netlify.app",
},
      
    {
      title: "IBM SkillsBuild Companion App",
      icon: <FaUsers />,
      description:
        "A gamified learning web application developed for IBM SkillsBuild within an eight-member Agile team to improve user engagement with online learning content.",
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "MySQL",
        "GitLab",
        "Agile",
      ],
      highlights: [
        "Built backend services using Java and Spring Boot to manage application functionality and business logic",
        "Developed RESTful API endpoints to support communication between the frontend, backend and database",
        "Configured a MySQL relational database for structured user data storage and application data management",
        "Applied Spring Security to support secure authentication and controlled access to application features",
        "Used GitLab for version control, code integration and collaboration across an eight-member development team",
        "Led Agile sprint planning, progress tracking and team coordination as Scrum Master to ensure project milestones were achieved",
      ],
      icons: [
        <FaJava />,
        <SiSpring />,
        <SiMysql />,
        <SiGitlab />,
      ],
  },

  {
      title: "Scrabble Game",
      icon: <FaGamepad />,
      description:
        "A desktop Scrabble game developed using Python and Pygame, featuring multiple gameplay modes, rule validation, configurable timers and an automated computer opponent.",
      tech: [
        "Python",
        "Pygame",
        "OOP",
        "DAWG",
        "Algorithms",
        "Game Logic",
      ],
      highlights: [
        "Built a modular desktop game using Python, Pygame and object-oriented programming principles",
        "Implemented player-versus-player and player-versus-computer game modes with easy, medium and hard difficulty levels",
        "Integrated a DAWG data structure for efficient dictionary validation and prefix-based word searching",
        "Developed rule-validation algorithms for tile alignment, board connectivity, first-move placement and multiword formation",
        "Implemented a custom scoring engine supporting DL, TL, DW and TW bonuses, crosswords, blank tiles and 50-point bingo scoring",
        "Optimised computer-opponent move generation by searching valid positions adjacent to existing board tiles",
        "Developed configurable total-game and per-turn timers with automatic passing and end-game score calculation",
      ],
      icons: [<FaPython />, <FaGamepad />],
      hasSlider: true,
    },

    {
      title: "University Timetable Management System",
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
      icons: [
        <FaJava />,
        <SiSpring />,
        <SiSwagger />,
        <SiPostman />,
        <FaAndroid />,
      ],
    },
    {
      title: "Private Cloud Whiteboard",
      icon: <FaCloud />,
      description:
        "Distributed a shared interactive whiteboard application across multiple Microsoft Azure App Service nodes.",
      tech: [
        "Azure",
        "WebSocket",
        "Redis Cache",
        "Docker",
        "Cloud Scaling",
      ],
      highlights: [
        "Integrated Azure Web PubSub for WebSocket communication",
        "Used Redis Cache for state synchronisation",
        "Applied Docker containers for horizontal scaling",
      ],
      icons: [<FaCloud />, <SiRedis />, <FaDocker />, <FaDatabase />],
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

              <h3>{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="project-tech-showcase">
              <div className="project-icon-row">
                {project.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
            </div>

            {project.hasSlider && (
              <div className="screenshot-gallery">
                <h4>Screenshots</h4>

                <div className="slider-container">
                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={previousImage}
                    aria-label="Show previous screenshot"
                  >
                    ‹
                  </button>

                  <div className="slider-image-frame">
                    <img
                      src={scrabbleScreenshots[currentImageIndex]}
                      alt={`Scrabble screenshot ${currentImageIndex + 1}`}
                      className="slider-image"
                    />
                  </div>

                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={nextImage}
                    aria-label="Show next screenshot"
                  >
                    ›
                  </button>
                </div>

                <div className="slider-dots">
                  {scrabbleScreenshots.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`dot ${
                        currentImageIndex === index ? "active-dot" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Show screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {(project.repoLink || project.demoLink) && (
              <div className="project-links">
                {project.repoLink && (
                  <a
                    className="repo-link"
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    Repo
                  </a>
                )}

                {project.demoLink && (
                  <a
                    className="demo-link"
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
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
  SiVitest,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { createPortal } from "react-dom";
import "../styles/Projects.css";

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pitchBriefImageIndex, setPitchBriefImageIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const swipeStartX = useRef<number | null>(null);
  const swipeStartY = useRef<number | null>(null);

  const pitchBriefScreenshots = [
    "/img/PitchBrief/pb-1.jpg",
    "/img/PitchBrief/pb-2.jpg",
    "/img/PitchBrief/pb-3.jpg",
    "/img/PitchBrief/pb-4.jpg",
    "/img/PitchBrief/pb-5.jpg",
    "/img/PitchBrief/pb-6.jpg",
    "/img/PitchBrief/pb-7.jpg",
    "/img/PitchBrief/pb-8.jpg",
    "/img/PitchBrief/pb-9.jpg",
  ];

  const scrabbleScreenshots = [
    "/img/scrabble/scrab-1.jpg",
    "/img/scrabble/scrab-2.jpg",
    "/img/scrabble/scrab-3.jpg",
    "/img/scrabble/scrab-4.jpg",
    "/img/scrabble/scrab-5.jpg",
    "/img/scrabble/scrab-6.jpg",
    "/img/scrabble/scrab-7.jpg",
    "/img/scrabble/scrab-8.jpg",
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

  const nextPitchBriefImage = () => {
    setPitchBriefImageIndex(
      (previousIndex) => (previousIndex + 1) % pitchBriefScreenshots.length
    );
  };

  const previousPitchBriefImage = () => {
    setPitchBriefImageIndex((previousIndex) =>
      previousIndex === 0
        ? pitchBriefScreenshots.length - 1
        : previousIndex - 1
    );
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setZoomLevel(1);
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => {
    setLightbox(null);
    setZoomLevel(1);
  };

  const moveLightbox = (direction: number) => {
    setZoomLevel(1);
    setLightbox((current) => {
      if (!current) return current;
      return {
        ...current,
        index:
          (current.index + direction + current.images.length) %
          current.images.length,
      };
    });
  };

  const handleSwipeStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1 || zoomLevel > 1) return;
    swipeStartX.current = event.touches[0].clientX;
    swipeStartY.current = event.touches[0].clientY;
  };

  const handleSwipeEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      swipeStartX.current === null ||
      swipeStartY.current === null ||
      event.changedTouches.length !== 1 ||
      zoomLevel > 1
    ) {
      swipeStartX.current = null;
      swipeStartY.current = null;
      return;
    }

    const distanceX = event.changedTouches[0].clientX - swipeStartX.current;
    const distanceY = event.changedTouches[0].clientY - swipeStartY.current;

    if (Math.abs(distanceX) >= 55 && Math.abs(distanceX) > Math.abs(distanceY)) {
      moveLightbox(distanceX < 0 ? 1 : -1);
    }

    swipeStartX.current = null;
    swipeStartY.current = null;
  };

  useEffect(() => {
    const handleKeyboardNavigation = (event: KeyboardEvent) => {
      if (event.key === "Escape" && lightbox) closeLightbox();
      if (event.key === "ArrowLeft" && lightbox) moveLightbox(-1);
      if (event.key === "ArrowRight" && lightbox) moveLightbox(1);
    };

    window.addEventListener("keydown", handleKeyboardNavigation);
    return () => window.removeEventListener("keydown", handleKeyboardNavigation);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
        "Postman",
        "Vitest",
      ],
      highlights: [
        "Built a full-stack football news platform using React, TypeScript, Express and PostgreSQL",
        "Implemented secure user authentication with JWT, protected routes and encrypted passwords",
        "Designed and managed a PostgreSQL database using Prisma ORM with relational data models",
        "Developed favourite clubs and article bookmarking features with RESTful CRUD APIs",
        "Integrated live football news from RSS feeds and automated updates with a background scheduler",
        "Tested REST API endpoints in Postman to verify requests, responses, authentication and error handling",
        "Created 55 passing automated unit tests using Vitest, covering authentication (19), club matching (13), favourite clubs (6), bookmarks (8) and reading history (9)",
        "Deployed the frontend on Netlify and the backend on Railway",
      ],
      icons: [
        <SiReact />,
        <SiTypescript />,
        <SiNodedotjs />,
        <SiExpress />,
        <SiPostgresql />,
        <SiPrisma />,
        <SiPostman />,
        <SiVitest />,
      ],
      demoLink: "https://pitchbrief.netlify.app/",
      caseStudy: {
        challenge: "Football news, accounts, favourites and bookmarks needed to work as one reliable product across separately deployed frontend and backend services.",
        approach: "I designed typed React interfaces around an Express REST API, modelled relational data with Prisma and PostgreSQL, secured protected routes with JWT authentication, and tested core behaviour before deployment.",
        result: "A deployed full-stack platform with automated RSS ingestion, persistent personalisation and a maintainable separation between presentation, business logic and data access.",
        architecture: true,
      },
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
  caseStudy: {
    challenge: "Present a broad range of technical work without making the experience feel like a long, generic list of technologies.",
    approach: "I built reusable React and TypeScript sections, a responsive visual system, scroll-aware navigation and interactive project media using accessible controls.",
    result: "A fast, maintainable portfolio that communicates both technical depth and visual personality across desktop and mobile devices.",
    architecture: false,
  },
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
      caseStudy: {
        challenge: "An eight-person team needed to turn IBM SkillsBuild content into a more engaging application while maintaining secure, consistent backend behaviour.",
        approach: "I developed Java and Spring Boot services, REST endpoints and MySQL persistence, applied Spring Security, and coordinated sprint delivery as Scrum Master.",
        result: "The team delivered structured application functionality while using GitLab and Agile ceremonies to keep integration work and milestones on track.",
        architecture: false,
      },
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
      caseStudy: {
        challenge: "Reproduce Scrabble rules accurately while generating valid computer moves quickly enough for responsive desktop gameplay.",
        approach: "I separated board, scoring and turn logic into Python classes, used a DAWG for prefix search, and constrained AI move generation to viable board positions.",
        result: "A configurable Pygame application supporting two game modes, three AI difficulties, complete premium-square scoring and automatic timer handling.",
        architecture: false,
      },
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
      caseStudy: {
        challenge: "Keep timetable, module and convenor data consistent between an Android client and backend services.",
        approach: "I exposed Spring MVC REST endpoints, documented them with Swagger, verified requests in Postman and rendered the results through a RecyclerView interface.",
        result: "A clear client-server workflow for creating, retrieving and presenting university timetable data.",
        architecture: false,
      },
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
      caseStudy: {
        challenge: "Multiple cloud instances needed to display the same whiteboard state while users collaborated in real time.",
        approach: "I containerised the service, distributed WebSocket events through Azure Web PubSub and stored shared state in Redis rather than individual app instances.",
        result: "A horizontally scalable design that kept connected clients synchronised across multiple Azure App Service nodes.",
        architecture: false,
      },
    },

  ];

  return (
    <>
      <section id="projects" className="projects-section">
      <div className="projects-header" data-reveal>
        <h2>Projects</h2>

        <p>
          A collection of academic and practical software projects covering
          backend development, cloud systems, Android development and game
          programming.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, projectIndex) => (
          <article
            className="project-card"
            key={project.title}
            data-number={String(projectIndex + 1).padStart(2, "0")}
            data-reveal
          >
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
                  <span
                    key={index}
                    title={
                      project.title === "PitchBrief"
                        ? [
                            "React",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                            "Prisma",
                            "Postman",
                            "Vitest",
                          ][index]
                        : project.tech[index]
                    }
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>

            {(project.title === "PitchBrief" || project.title === "Scrabble Game") && (
              <button
                type="button"
                className="case-study-toggle"
                aria-expanded={expandedProject === project.title}
                aria-controls={`case-study-${projectIndex}`}
                onClick={() =>
                  setExpandedProject((current) =>
                    current === project.title ? null : project.title
                  )
                }
              >
                <span>
                  {expandedProject === project.title
                    ? "Return to overview"
                    : project.title === "PitchBrief"
                      ? "Explore the system behind PitchBrief"
                      : "Explore the Scrabble game engine"}
                </span>
                <span aria-hidden="true">{expandedProject === project.title ? "↑" : "↘"}</span>
              </button>
            )}

            {expandedProject === project.title && (
              <div className="project-case-study" id={`case-study-${projectIndex}`}>
                <div className={`case-study-grid ${project.title === "Scrabble Game" ? "scrabble-study" : ""}`}>
                  <section>
                    <span>{project.title === "PitchBrief" ? "The product problem" : "Rules worth getting right"}</span>
                    <p>{project.caseStudy.challenge}</p>
                  </section>
                  <section>
                    <span>{project.title === "PitchBrief" ? "Behind the experience" : "Inside the game engine"}</span>
                    <p>{project.caseStudy.approach}</p>
                  </section>
                  <section>
                    <span>{project.title === "PitchBrief" ? "What I delivered" : "The finished experience"}</span>
                    <p>{project.caseStudy.result}</p>
                  </section>
                </div>

                {project.caseStudy.architecture && (
                  <div className="architecture-panel" aria-label="PitchBrief system architecture">
                    <div className="architecture-title">
                      <span>LIVE SYSTEM MAP</span>
                      <strong>Request to response</strong>
                    </div>
                    <div className="architecture-flow">
                      <div className="architecture-node"><SiReact /><span>React UI</span></div>
                      <i aria-hidden="true" />
                      <div className="architecture-node"><SiExpress /><span>Express API</span></div>
                      <i aria-hidden="true" />
                      <div className="architecture-node"><SiPrisma /><span>Prisma ORM</span></div>
                      <i aria-hidden="true" />
                      <div className="architecture-node"><SiPostgresql /><span>PostgreSQL</span></div>
                    </div>
                    <p className="architecture-note">RSS scheduler → normalises live stories → persists updates through the API layer</p>
                  </div>
                )}
              </div>
            )}

            {project.title === "PitchBrief" && (
              <div className="screenshot-gallery pitchbrief-gallery">
                <div className="gallery-heading-row">
                  <h4>PitchBrief Preview</h4>
                  <span>Tap the image to view full screen</span>
                </div>

                <div className="slider-container">
                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={previousPitchBriefImage}
                    aria-label="Show previous PitchBrief screenshot"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="slider-image-frame slider-open-button"
                    onClick={() =>
                      openLightbox(
                        pitchBriefScreenshots,
                        pitchBriefImageIndex,
                        "PitchBrief"
                      )
                    }
                    aria-label={`Open PitchBrief screenshot ${pitchBriefImageIndex + 1} full screen`}
                  >
                    <span className="slider-image-stack">
                      {pitchBriefScreenshots.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`PitchBrief screenshot ${index + 1}`}
                          className={`slider-image ${
                            pitchBriefImageIndex === index ? "active-image" : ""
                          }`}
                          aria-hidden={pitchBriefImageIndex !== index}
                        />
                      ))}
                    </span>
                    <span className="open-image-hint" aria-hidden="true">Open full screen ↗</span>
                  </button>

                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={nextPitchBriefImage}
                    aria-label="Show next PitchBrief screenshot"
                  >
                    ›
                  </button>
                </div>

                <div className="slider-dots">
                  {pitchBriefScreenshots.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`dot ${
                        pitchBriefImageIndex === index ? "active-dot" : ""
                      }`}
                      onClick={() => setPitchBriefImageIndex(index)}
                      aria-label={`Show PitchBrief screenshot ${index + 1}`}
                      aria-current={pitchBriefImageIndex === index ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>
            )}

            {project.hasSlider && (
              <div className="screenshot-gallery">
                <div className="gallery-heading-row">
                  <h4>Scrabble Screenshots</h4>
                  <span>Tap the image to view full screen</span>
                </div>

                <div className="slider-container">
                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={previousImage}
                    aria-label="Show previous screenshot"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="slider-image-frame slider-open-button"
                    onClick={() =>
                      openLightbox(
                        scrabbleScreenshots,
                        currentImageIndex,
                        "Scrabble Game"
                      )
                    }
                    aria-label={`Open Scrabble screenshot ${currentImageIndex + 1} full screen`}
                  >
                    <span className="slider-image-stack">
                      {scrabbleScreenshots.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`Scrabble screenshot ${index + 1}`}
                          className={`slider-image ${
                            currentImageIndex === index ? "active-image" : ""
                          }`}
                          aria-hidden={currentImageIndex !== index}
                        />
                      ))}
                    </span>
                    <span className="open-image-hint" aria-hidden="true">Open full screen ↗</span>
                  </button>

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
                      aria-current={currentImageIndex === index ? "true" : undefined}
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
                    View Live Project
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
      </section>

      {lightbox && createPortal(
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} screenshot viewer`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close full-screen image viewer"
            title="Close viewer"
            style={{
              position: "fixed",
              top: "16px",
              right: "16px",
              zIndex: 2147483647,
              display: "grid",
              placeItems: "center",
              width: "52px",
              height: "52px",
              padding: 0,
              color: "#ffffff",
              fontSize: "36px",
              lineHeight: 1,
              cursor: "pointer",
              background: "#9a4966",
              border: "2px solid #ffffff",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.55)",
            }}
          >
            ×
          </button>

          <div
            className="lightbox-toolbar"
            onClick={(event) => event.stopPropagation()}
          >
            <div>
              <strong>{lightbox.title}</strong>
              <span>{lightbox.index + 1} / {lightbox.images.length}</span>
            </div>

            <div className="zoom-controls">
              <button
                type="button"
                onClick={() => setZoomLevel((current) => Math.max(1, current - 0.25))}
                disabled={zoomLevel <= 1}
                aria-label="Zoom out"
              >−</button>
              <span>{Math.round(zoomLevel * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoomLevel((current) => Math.min(3, current + 0.25))}
                disabled={zoomLevel >= 3}
                aria-label="Zoom in"
              >+</button>
            </div>
          </div>

          <div className="lightbox-viewer" onClick={closeLightbox}>
            <button
              type="button"
              className="lightbox-arrow"
              onClick={(event) => {
                event.stopPropagation();
                moveLightbox(-1);
              }}
              aria-label="Previous screenshot"
            >‹</button>
            <div
              className="lightbox-image-stage"
              onClick={(event) => {
                event.stopPropagation();
                if (event.target === event.currentTarget) closeLightbox();
              }}
              onTouchStart={handleSwipeStart}
              onTouchEnd={handleSwipeEnd}
              style={{
                touchAction:
                  zoomLevel > 1 ? "pan-x pan-y pinch-zoom" : "pan-y pinch-zoom",
              }}
            >
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.title} screenshot ${lightbox.index + 1}`}
                onClick={(event) => event.stopPropagation()}
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
            <button
              type="button"
              className="lightbox-arrow"
              onClick={(event) => {
                event.stopPropagation();
                moveLightbox(1);
              }}
              aria-label="Next screenshot"
            >›</button>
          </div>

          <p className="lightbox-help">Swipe left or right to change image · use +/− to zoom · tap × or press Escape to close</p>
        </div>,
        document.body
      )}
    </>
  );
}

export default Projects;
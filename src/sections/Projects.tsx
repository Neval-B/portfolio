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
  FaUtensils,
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
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPwa,
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
  const [flavorQuestImageIndex, setFlavorQuestImageIndex] = useState(0);
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
    "/img/scrabble/scrab-9.jpg",
  ];

  const flavorQuestScreenshots = [
    "/img/FlavorQuest/fq1.jpg",
    "/img/FlavorQuest/fq2.jpg",
    "/img/FlavorQuest/fq3.jpg",
    "/img/FlavorQuest/fq4.jpg",
    "/img/FlavorQuest/fq5.jpg",
    "/img/FlavorQuest/fq6.jpg",
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

  const nextFlavorQuestImage = () => {
    setFlavorQuestImageIndex(
      (previousIndex) => (previousIndex + 1) % flavorQuestScreenshots.length
    );
  };

  const previousFlavorQuestImage = () => {
    setFlavorQuestImageIndex((previousIndex) =>
      previousIndex === 0
        ? flavorQuestScreenshots.length - 1
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
    "Built and deployed a responsive portfolio using React, TypeScript, Vite and CSS, rendering typed project data through reusable components to keep content consistent and easier to maintain across devices",
    "Implemented scroll-aware navigation with IntersectionObserver, persistent motion controls with localStorage, and accessible image galleries using React state, keyboard handling and preloading to prevent layout shifts",
    "Configured Playwright end-to-end tests across Chromium, Firefox, WebKit and mobile viewports, validating navigation, motion controls, galleries and responsive layouts to prevent regressions",
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
      title: "FlavorQuest",
      icon: <FaUtensils />,
      description:
        "A responsive Leicester restaurant-discovery website that helps users find places to eat by flavour, dietary preference, restaurant name or dish.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "PWA",
        "JSON",
        "Service Workers",
        "Cache API",
        "Responsive Design",
      ],
      highlights: [
        "Built a responsive Leicester restaurant-discovery website using semantic HTML, CSS and JavaScript, delivering an accessible and consistent experience across desktop and mobile devices",
        "Loaded structured restaurant data from JSON and created real-time search with combined flavour and dietary filters in JavaScript, making listings easy to explore and maintain",
        "Implemented Progressive Web App functionality with a web app manifest, service worker and Cache API, enabling installation, offline access and faster repeat visits",
      ],
      icons: [
        <SiHtml5 />,
        <SiCss />,
        <SiJavascript />,
        <SiPwa />,
      ],
      caseStudy: {
        challenge: "Help users explore Leicester restaurants without searching through long, unstructured lists.",
        approach: "I used semantic HTML, responsive CSS and JavaScript to render structured JSON data, combine live search with flavour and dietary filters, and cache key assets through a service worker.",
        result: "An accessible restaurant-discovery experience that works across screen sizes, supports installation and remains available offline.",
        architecture: false,
      },
    },

  {
      title: "Scrabble Game",
      icon: <FaGamepad />,
      description:
        "A Python and Pygame Scrabble game available on desktop and the web, featuring local multiplayer, three computer-opponent difficulty levels and automated rule validation.",
      tech: [
        "Python",
        "Pygame",
        "OOP",
        "Algorithms",
        "Pygbag",
        "WebAssembly",
        "pytest",
      ],
      highlights: [
        "Built a modular Scrabble game with Python, Pygame and object-oriented programming, supporting local player-versus-player and three computer-opponent difficulty levels for varied gameplay",
        "Leveraged Python sets, dictionaries and targeted search algorithms to build an efficient computer-opponent move generator, reducing unnecessary candidate checks",
        "Adapted the game for browser deployment with Pygbag/WebAssembly and asynchronous game loops, enabling users to play directly through a web browser",
        "Used pytest to create automated unit tests, helping prevent regressions and verify core gameplay logic",
      ],
      icons: [<FaPython />, <FaGamepad />],
      hasSlider: true,
      demoLink: "https://nb-scrabble.netlify.app/",
      caseStudy: {
        challenge: "Reproduce Scrabble rules accurately while generating computer moves quickly enough for responsive desktop and browser gameplay.",
        approach: "I separated board, scoring and turn logic into Python classes, used targeted searches with sets and dictionaries, and adapted the game to asynchronous browser loops.",
        result: "A tested, browser-playable Pygame application with local multiplayer, three computer-opponent difficulty levels and reliable core gameplay logic.",
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
            className={`project-card ${
              project.title === "PitchBrief" ||
              project.title === "FlavorQuest" ||
              project.title === "Scrabble Game"
                ? "project-card-featured"
                : ""
            }`}
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

            {project.title === "PitchBrief" && (
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
                    : "Explore the system behind PitchBrief"}
                </span>
                <span aria-hidden="true">{expandedProject === project.title ? "↑" : "↘"}</span>
              </button>
            )}

            {expandedProject === project.title && (
              <div className="project-case-study" id={`case-study-${projectIndex}`}>
                <div className="case-study-grid">
                  <section>
                    <span>The product problem</span>
                    <p>{project.caseStudy.challenge}</p>
                  </section>
                  <section>
                    <span>Behind the experience</span>
                    <p>{project.caseStudy.approach}</p>
                  </section>
                  <section>
                    <span>What I delivered</span>
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

            {project.title === "FlavorQuest" && (
              <div className="screenshot-gallery flavorquest-gallery">
                <div className="gallery-heading-row">
                  <h4>FlavorQuest Preview</h4>
                  <span>Tap the image to view full screen</span>
                </div>

                <div className="slider-container">
                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={previousFlavorQuestImage}
                    aria-label="Show previous FlavorQuest screenshot"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="slider-image-frame slider-open-button"
                    onClick={() =>
                      openLightbox(
                        flavorQuestScreenshots,
                        flavorQuestImageIndex,
                        "FlavorQuest"
                      )
                    }
                    aria-label={`Open FlavorQuest screenshot ${flavorQuestImageIndex + 1} full screen`}
                  >
                    <span className="slider-image-stack">
                      {flavorQuestScreenshots.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`FlavorQuest screenshot ${index + 1}`}
                          className={`slider-image ${
                            flavorQuestImageIndex === index ? "active-image" : ""
                          }`}
                          aria-hidden={flavorQuestImageIndex !== index}
                        />
                      ))}
                    </span>
                    <span className="open-image-hint" aria-hidden="true">Open full screen ↗</span>
                  </button>

                  <button
                    type="button"
                    className="slider-arrow"
                    onClick={nextFlavorQuestImage}
                    aria-label="Show next FlavorQuest screenshot"
                  >
                    ›
                  </button>
                </div>

                <div className="slider-dots">
                  {flavorQuestScreenshots.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`dot ${
                        flavorQuestImageIndex === index ? "active-dot" : ""
                      }`}
                      onClick={() => setFlavorQuestImageIndex(index)}
                      aria-label={`Show FlavorQuest screenshot ${index + 1}`}
                      aria-current={flavorQuestImageIndex === index ? "true" : undefined}
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

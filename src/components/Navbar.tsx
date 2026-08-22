import { useEffect, useState, type CSSProperties } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const sectionIds = ["home", "projects", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleCommandPalette = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandPaletteOpen((current) => !current);
      }
      if (event.key === "Escape") setIsCommandPaletteOpen(false);
    };

    window.addEventListener("keydown", handleCommandPalette);
    return () => window.removeEventListener("keydown", handleCommandPalette);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const updateNavigation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const activationPoint = window.scrollY + window.innerHeight * 0.35;
        let currentSection = "home";

        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section && activationPoint >= section.offsetTop) currentSection = id;
        });

        const reachedPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        setActiveSection(reachedPageBottom ? "contact" : currentSection);

        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      });
    };

    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    updateNavigation();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
  };

  return (
    <>
    <header className="navbar">
      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <a href="#home" className="logo" onClick={() => scrollToSection("home")} aria-label="Go to home">
        <span>NB</span>
      </a>

      <nav
        className="nav-menu"
        aria-label="Main navigation"
        style={{ "--active-index": sectionIds.indexOf(activeSection) } as CSSProperties}
      >
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <div className="socials">
        <a href="https://github.com/Neval-B" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/neval-babu/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin />
        </a>
        <button
          type="button"
          className="command-trigger"
          onClick={() => setIsCommandPaletteOpen(true)}
          aria-label="Open quick navigation"
        >
          <span>⌘</span>K
        </button>
      </div>
    </header>

    {isCommandPaletteOpen && (
      <div className="command-backdrop" onMouseDown={() => setIsCommandPaletteOpen(false)}>
        <div
          className="command-palette"
          role="dialog"
          aria-modal="true"
          aria-labelledby="command-title"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="command-heading">
            <div>
              <span>NEVAL.OS / QUICK ACCESS</span>
              <h2 id="command-title">Where do you want to go?</h2>
            </div>
            <button type="button" onClick={() => setIsCommandPaletteOpen(false)} aria-label="Close quick navigation">ESC</button>
          </div>
          <div className="command-list">
            <a href="#projects" onClick={() => setIsCommandPaletteOpen(false)}><b>01</b><span><strong>Explore projects</strong><small>See engineering case studies</small></span><em>↵</em></a>
            <a href="/Neval_Babu_CV.pdf" onClick={() => setIsCommandPaletteOpen(false)}><b>02</b><span><strong>View my CV</strong><small>Experience, education and skills</small></span><em>↗</em></a>
            <a href="https://github.com/Neval-B" target="_blank" rel="noreferrer" onClick={() => setIsCommandPaletteOpen(false)}><b>03</b><span><strong>Open GitHub</strong><small>Browse my source code</small></span><em>↗</em></a>
            <a href="#contact" onClick={() => setIsCommandPaletteOpen(false)}><b>04</b><span><strong>Contact me</strong><small>Start a conversation</small></span><em>↵</em></a>
          </div>
          <p className="command-footer"><span /> Tip: press <kbd>Ctrl</kbd> + <kbd>K</kbd> anywhere on the site</p>
        </div>
      </div>
    )}
    </>
  );
}

export default Navbar;

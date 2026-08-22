import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowIntro(false);
      return;
    }

    document.body.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setIntroLeaving(true), 1650);
    const removeTimer = window.setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-active");
    }, 2250);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    const updateAmbientLight = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--ambient-x",
        `${(event.clientX / window.innerWidth) * 100}%`
      );
      document.documentElement.style.setProperty(
        "--ambient-y",
        `${(event.clientY / window.innerHeight) * 100}%`
      );
    };

    window.addEventListener("pointermove", updateAmbientLight, { passive: true });
    return () => window.removeEventListener("pointermove", updateAmbientLight);
  }, []);

  useEffect(() => {
    if (showIntro) return;

    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, [showIntro]);

  const skipIntro = () => {
    setIntroLeaving(true);
    window.setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove("intro-active");
    }, 400);
  };

  return (
    <>
      {showIntro && (
        <div className={`site-intro ${introLeaving ? "is-leaving" : ""}`}>
          <div className="intro-ring intro-ring-one" aria-hidden="true" />
          <div className="intro-ring intro-ring-two" aria-hidden="true" />
          <div className="intro-monogram" aria-label="Neval Babu">
            <span>N</span><i /><span>B</span>
          </div>
          <p>Designing thoughtful software experiences</p>
          <div className="intro-progress" aria-hidden="true"><span /></div>
          <button type="button" onClick={skipIntro}>Skip</button>
        </div>
      )}

      <div className="ambient-world" aria-hidden="true">
        <div className="ambient-core" />
        <div className="violet-horizon" />
        <span className="energy-ribbon ribbon-one" />
        <span className="energy-ribbon ribbon-two" />
        <span className="energy-ribbon ribbon-three" />
        <span className="energy-ribbon ribbon-four" />
        <span className="light-particle particle-one" />
        <span className="light-particle particle-two" />
        <span className="light-particle particle-three" />
      </div>

      <Navbar />

      <main>
        <Home />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

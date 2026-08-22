import Navbar from "./layout/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import "./App.css";

export type MotionPreference = "on" | "off" | "auto";

const getInitialMotionPreference = (): MotionPreference => {
  const savedPreference = localStorage.getItem("motion-preference");

  return savedPreference === "on" ||
    savedPreference === "off" ||
    savedPreference === "auto"
    ? savedPreference
    : "on";
};

function App() {
  const [motionPreference, setMotionPreference] =
    useState<MotionPreference>(getInitialMotionPreference);
  const [systemPrefersReducedMotion, setSystemPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const motionEnabled =
    motionPreference === "on" ||
    (motionPreference === "auto" && !systemPrefersReducedMotion);
  const [showIntro, setShowIntro] = useState(motionEnabled);
  const [introLeaving, setIntroLeaving] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSystemPreference = () =>
      setSystemPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateSystemPreference);
    return () => mediaQuery.removeEventListener("change", updateSystemPreference);
  }, []);

  useEffect(() => {
    localStorage.setItem("motion-preference", motionPreference);
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";

    if (!motionEnabled) {
      setShowIntro(false);
      setIntroLeaving(false);
      document.body.classList.remove("intro-active");
    }
  }, [motionEnabled, motionPreference]);

  useEffect(() => {
    if (!motionEnabled || !showIntro) return;

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
  }, [motionEnabled, showIntro]);

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

    if (!motionEnabled) {
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
  }, [motionEnabled, showIntro]);

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

      <Navbar
        motionPreference={motionPreference}
        onMotionPreferenceChange={setMotionPreference}
      />

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
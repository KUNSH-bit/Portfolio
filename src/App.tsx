import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechVisual from "./components/TechVisual";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    anchors: true,
  });

  // Smoothly scroll to internal sections when navigation links are clicked.
  const handleAnchorClick = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    const link = targetElement.closest<HTMLAnchorElement>('a[href^="#"]');

    if (!link) return;

    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const section = document.querySelector(hash);
    if (!section) return;

    event.preventDefault();
    lenis.scrollTo(section, { offset: -80 });
  };

  document.addEventListener("click", handleAnchorClick);

  const update = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);

  // General reveal animations.
  gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
    gsap.fromTo(
      element,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      }
    );
  });

  // Section headings enter from the left.
  gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
    gsap.fromTo(
      heading,
      { x: -70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  // Horizontal pinned project gallery.
  const projectSection = document.querySelector<HTMLElement>(
    ".projects-section"
  );
  const projectTrack = document.querySelector<HTMLElement>(
    ".projects-track"
  );

  if (projectSection && projectTrack) {
    const getScrollDistance = () =>
      Math.max(0, projectTrack.scrollWidth - window.innerWidth);

    gsap.to(projectTrack, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: projectSection,
        start: "top+=100 top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  // Draw circuit paths as the tech visual enters the viewport.
  gsap.fromTo(
    ".circuit-path",
    { strokeDashoffset: 1 },
    {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".tech-visual",
        start: "top 75%",
        once: true,
      },
    }
  );

  // Bring the circuit nodes online one by one.
  gsap.fromTo(
    ".tech-node",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.15,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".tech-visual",
        start: "top 75%",
        once: true,
      },
    }
  );

  ScrollTrigger.refresh();

  return () => {
    document.removeEventListener("click", handleAnchorClick);
    gsap.ticker.remove(update);
    lenis.destroy();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechVisual />
        <Projects />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
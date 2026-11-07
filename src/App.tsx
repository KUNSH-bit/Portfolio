import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
    });

    const updateScroll = () => ScrollTrigger.update();

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", updateScroll);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      // General reveal animations
      gsap.utils
  .toArray<HTMLElement>(
    ".reveal:not(.project-card):not(.section-heading):not(.capability-row):not(.contact-title)"
  )
  .forEach((element) => {
    gsap.fromTo(
      element,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      }
    );
  });

      // Section headings slide in from the left
      gsap.utils
        .toArray<HTMLElement>(".section-heading")
        .forEach((heading) => {
          gsap.fromTo(
            heading,
            {
              x: -35,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

      // Project cards enter one after another
      gsap.fromTo(
        ".project-card",
        {
          y: 90,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Capability rows slide in from alternating sides
      gsap.utils
        .toArray<HTMLElement>(".capability-row")
        .forEach((row, index) => {
          gsap.fromTo(
            row,
            {
              x: index % 2 === 0 ? -55 : 55,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

      // Subtle hero parallax while scrolling away
      gsap.to(".hero-title", {
        y: -110,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Contact heading moves upward as it enters
      gsap.fromTo(
        ".contact-title",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Contact social links appear in sequence
      gsap.fromTo(
        ".contact-socials a",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-socials",
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    return () => {
      context.revert();
      gsap.ticker.remove(raf);
      lenis.off("scroll", updateScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
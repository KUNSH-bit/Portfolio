import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".hero-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".hero-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.13,
          },
          "-=0.35"
        )
        .from(
          ".hero-bottom",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-top">
        <span className="hero-eyebrow">
          PORTFOLIO — 2026 / 2030
        </span>

        <span className="hero-eyebrow hero-location">
          COMPUTER SCIENCE · AI
        </span>
      </div>

      <div className="hero-title">
        <div className="hero-line-wrapper">
          <h1 className="hero-line">BUILDING</h1>
        </div>

        <div className="hero-line-wrapper hero-line-middle">
          <h1 className="hero-line">
            THINGS THAT
          </h1>
        </div>

        <div className="hero-line-wrapper">
          <h1 className="hero-line hero-outline">
            MATTER<span>.</span>
          </h1>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-description">
          <span className="small-label">WHO I AM</span>
          <p>
            I'm Kunsh — a computer science student who enjoys
            turning ideas into software, systems and real-world
            experiments.
          </p>
        </div>

        <a href="#projects" className="explore-work">
          EXPLORE MY WORK
          <ArrowUpRight size={17} />
        </a>

        <a href="#about" className="hero-scroll">
          <ArrowDown size={17} />
          SCROLL TO EXPLORE
        </a>
      </div>

      <div className="hero-index">01 / 05</div>
    </section>
  );
}

export default Hero;
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-heading reveal">
        <span className="section-number">01 — ABOUT</span>
        <span className="section-note">A LITTLE INTRODUCTION</span>
      </div>

      <div className="about-content">
        <h2 className="about-statement reveal">
          CURIOUS BY NATURE.
          <br />
          <span>BUILDER BY CHOICE.</span>
        </h2>

        <div className="about-details reveal">
          <p>
            I'm a Computer Science student at IIIT Guwahati,
            interested in artificial intelligence, software
            engineering and the intersection of software
            with hardware.
          </p>

          <p>
            I like understanding how things work, experimenting
            with new technologies and building projects that
            solve practical problems.
          </p>

          <a
            href="https://github.com/KUNSH-bit"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            MORE ON GITHUB <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="about-facts reveal">
        <div>
          <span className="fact-label">CURRENTLY</span>
          <span className="fact-value">B.TECH — CSE</span>
        </div>

        <div>
          <span className="fact-label">INSTITUTION</span>
          <span className="fact-value">IIIT GUWAHATI</span>
        </div>

        <div>
          <span className="fact-label">EXPECTED GRADUATION</span>
          <span className="fact-value">2030</span>
        </div>

        <div>
          <span className="fact-label">INTERESTS</span>
          <span className="fact-value">AI / SOFTWARE / SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}

export default About;
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Gesture Engine",
    category: "COMPUTER VISION / PYTHON",
    description:
      "An offline gesture-based computer control system using webcam input, MediaPipe hand landmarks and rule-based gesture recognition.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    className: "project-gesture",
    label: "VISION",
    github: "https://github.com/KUNSH-bit/AI-Gesture-Engine",
  },
  {
    number: "02",
    title: "GaonKhiladi",
    category: "MOBILE DEVELOPMENT / SIH",
    description:
      "An offline-first athlete discovery platform connecting athletes and coaches through sports profiles, leaderboards and performance indicators.",
    technologies: ["Flutter", "Dart", "Mobile UI"],
    className: "project-gaon",
    label: "SPORTS TECH",
    github: "https://github.com/KUNSH-bit/SIH-26-gaon_khiladi_",
  },
  {
    number: "03",
    title: "Rust File Manager",
    category: "SYSTEMS / RUST",
    description:
      "A command-line file management utility designed to organize files and provide a simple preview workflow.",
    technologies: ["Rust", "CLI", "File Systems"],
    className: "project-rust",
    label: "SYSTEMS",
    github: "https://github.com/KUNSH-bit/File-Management-System-Rust-",
  },
  {
    number: "04",
    title: "ESP32 Chess",
    category: "EMBEDDED SYSTEMS",
    description:
      "An embedded chess-game project built around an ESP32, an ILI9341 display and physical input buttons.",
    technologies: ["ESP32", "Arduino", "C++", "ILI9341"],
    className: "project-chess",
    label: "EMBEDDED",
    github: "https://github.com/KUNSH-bit/esp-32-Chess-game",
  },
  {
    number: "05",
    title: "Crash Detection Helmet",
    category: "IOT / HARDWARE",
    description:
      "An Arduino-based crash detection prototype using an MPU6050 motion sensor and Bluetooth communication for alerts.",
    technologies: ["Arduino", "MPU6050", "HC-05", "C++"],
    className: "project-helmet",
    label: "IOT",
    github: "https://github.com/KUNSH-bit/Crash-Detection-Helmet",
  },
];

function Projects() {
  return (
    <section className="projects section-padding" id="work">
      <div className="section-heading reveal">
        <span className="section-number">02 — SELECTED WORK</span>
        <span className="section-note">A COLLECTION OF EXPERIMENTS & BUILDS</span>
      </div>

      <div className="projects-intro reveal">
        <h2>SELECTED<br />PROJECTS<span>.</span></h2>
        <p>
          A few things I've built while exploring software,
          artificial intelligence and hardware.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.number}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`project-art ${project.className}`}
              aria-label={`View ${project.title} on GitHub`}
            >
              <span className="project-art-label">{project.label}</span>

              <span className="project-art-number">
                {project.number}
              </span>

              <span className="project-art-symbol">
                {project.number === "01" && "◎"}
                {project.number === "02" && "↗"}
                {project.number === "03" && "{"}
                {project.number === "04" && "♞"}
                {project.number === "05" && "+"}
              </span>

              <span className="project-art-open">
                <ArrowUpRight size={22} />
              </span>
            </a>

            <div className="project-info">
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`Open ${project.title} repository`}
              >
                <ArrowUpRight size={20} />
              </a>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <a
        href="https://github.com/KUNSH-bit?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="all-projects-link reveal"
      >
        VIEW MORE PROJECTS <ArrowUpRight size={17} />
      </a>
    </section>
  );
}

export default Projects;
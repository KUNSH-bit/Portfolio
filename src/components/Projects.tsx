
const projects = [
  {
    number: "01",
    name: "AI Gesture Engine",
    category: "COMPUTER VISION / DESKTOP AUTOMATION",
    description:
      "A real-time, offline gesture recognition system that turns hand movements into desktop commands. It tracks 21 hand landmarks, classifies gestures, and uses cooldowns and temporal filtering to make interactions more stable.",
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    symbol: "01 / VISION",
    repo: "https://github.com/KUNSH-bit/AI-Gesture-Engine",
  },
  {
    number: "02",
    name: "GaonKhiladi",
    category: "MOBILE / OFFLINE-FIRST",
    description:
      "An athlete discovery and development platform designed to connect athletes with coaches and recruiters. It brings together athlete profiles, performance benchmarks, leaderboards, and tournament workflows, with an emphasis on offline access.",
    stack: ["Flutter", "Dart", "Android", "Local Storage"],
    symbol: "02 / SPORT",
    repo: "https://github.com/KUNSH-bit/SIH-26-gaon_khiladi-",
  },
  {
    number: "03",
    name: "Rust File Manager",
    category: "SYSTEMS / CLI TOOL",
    description:
      "A command-line file management tool built in Rust. It organizes files through filesystem operations and provides a preview option so users can inspect intended changes before applying them.",
    stack: ["Rust", "CLI", "File System", "Cargo"],
    symbol: "03 / SYSTEMS",
    repo: "https://github.com/KUNSH-bit/File-Management-System-Rust-",
  },
  {
    number: "04",
    name: "ESP32 Chess",
    category: "EMBEDDED SYSTEMS / GAME",
    description:
      "An embedded chess interface built around an ESP32 and an ILI9341 display, with physical buttons for player input. The project explores the intersection of firmware, display handling, and interactive game logic.",
    stack: ["ESP32", "Arduino C++", "ILI9341", "Embedded C++"],
    symbol: "04 / EMBEDDED",
    repo: "https://github.com/KUNSH-bit/esp-32-Chess-game",
  },
  {
    number: "05",
    name: "Crash Detection Helmet",
    category: "IOT / SAFETY SYSTEM",
    description:
      "An Arduino-based prototype that uses motion sensing to detect possible crash events. It combines an MPU6050 sensor with Bluetooth communication to send an alert, including a cancellation window to reduce accidental notifications.",
    stack: ["Arduino", "C++", "MPU6050", "HC-05"],
    symbol: "05 / IOT",
    repo: "https://github.com/KUNSH-bit/Crash-Detection-Helmet",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <h2 className="section-heading">PROJECTS BY ME<span>.</span></h2>
        </div>
        <p className="projects-instruction">
          SCROLL TO EXPLORE <span>→</span>
        </p>
      </div>

      <div className="projects-track">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span>{project.number} / 05</span>
              <span>{project.category}</span>
            </div>

            <div className="project-art">
              <span className="project-art-symbol">{project.symbol}</span>
              <span className="project-art-mark">{project.number}</span>
              <div className="project-art-grid" />
            </div>

            <div className="project-card-bottom">
              <div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  VIEW REPOSITORY ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-progress">
        <span>KEEP SCROLLING TO EXPLORE</span>
        <span className="projects-progress-line" />
        <span>05 PROJECTS</span>
      </div>
    </section>
  );
}

const capabilities = [
  {
    number: "01",
    title: "PROGRAMMING",
    items: "Python · C++ · Java · JavaScript · Rust",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    items: "HTML · CSS · React · TypeScript",
  },
  {
    number: "03",
    title: "AI & COMPUTER VISION",
    items: "OpenCV · MediaPipe · AI/ML fundamentals",
  },
  {
    number: "04",
    title: "HARDWARE & EMBEDDED",
    items: "Arduino · ESP32 · Sensors · Prototyping",
  },
];

function Capabilities() {
  return (
    <section
      className="capabilities section-padding"
      id="capabilities"
    >
      <div className="section-heading reveal">
        <span className="section-number">03 — CAPABILITIES</span>
        <span className="section-note">TOOLS I WORK WITH</span>
      </div>

      <div className="capabilities-intro reveal">
        <h2>
          MY TECH
          <br />
          TOOLKIT<span>.</span>
        </h2>
        <p>
          A growing collection of technologies I use
          to turn ideas into working projects.
        </p>
      </div>

      <div className="capability-list">
        {capabilities.map((item) => (
          <div className="capability-row reveal" key={item.number}>
            <span className="capability-number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.items}</p>
          </div>
        ))}
      </div>

      <p className="capability-disclaimer">
        Always learning. This list reflects technologies I've
        worked with, not equal proficiency in every tool.
      </p>
    </section>
  );
}

export default Capabilities;
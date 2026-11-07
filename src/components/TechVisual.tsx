
export default function TechVisual() {
  return (
    <div className="tech-visual">
      <p className="tech-visual-label">SYSTEM ARCHITECTURE / 001</p>

      <svg
        className="circuit-svg"
        viewBox="0 0 700 260"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="circuit-path"
          pathLength="1"
          d="M20 130 H150 V55 H280"
        />
        <path
          className="circuit-path"
          pathLength="1"
          d="M150 130 V205 H350"
        />
        <path
          className="circuit-path"
          pathLength="1"
          d="M280 55 H430 V130 H680"
        />
        <path
          className="circuit-path"
          pathLength="1"
          d="M350 205 H500 V130"
        />
        <path
          className="circuit-path"
          pathLength="1"
          d="M430 130 V35 H600"
        />

        <circle className="tech-node" cx="150" cy="130" r="7" />
        <circle className="tech-node" cx="280" cy="55" r="7" />
        <circle className="tech-node" cx="350" cy="205" r="7" />
        <circle className="tech-node" cx="430" cy="130" r="7" />
        <circle className="tech-node" cx="600" cy="35" r="7" />
        <circle className="tech-node" cx="680" cy="130" r="7" />
      </svg>

      <div className="tech-visual-caption">
        IDEA → ENGINEERING → EXECUTION
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="nav-logo" onClick={closeMenu}>
        KA<span>.</span>
      </a>

      <div className="nav-status">
        <span className="status-dot" />
        AVAILABLE FOR OPPORTUNITIES
      </div>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#work" onClick={closeMenu}>PROJECTS</a>
        <a href="#capabilities" onClick={closeMenu}>SKILLS</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </nav>

      <a
        href="https://github.com/KUNSH-bit"
        target="_blank"
        rel="noreferrer"
        className="nav-github"
      >
        GITHUB <ArrowUpRight size={15} />
      </a>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;
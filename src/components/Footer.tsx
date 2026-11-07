import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="footer-logo">
          KA<span>.</span>
        </a>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 KUNSH AGARWAL</span>

        <div className="footer-socials">
          <a
            href="https://github.com/KUNSH-bit"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.linkedin.com/in/kunsh-agarwal-bb3392416/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN <ArrowUpRight size={13} />
          </a>
        </div>

        <span>DESIGNED & BUILT WITH REACT</span>
      </div>
    </footer>
  );
}

export default Footer;
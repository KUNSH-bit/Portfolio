import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="section-heading reveal">
        <span className="section-number">04 — CONTACT</span>
        <span className="section-note">HAVE AN IDEA?</span>
      </div>

      <div className="contact-content">
        <span className="contact-eyebrow reveal">
          LET'S CONNECT
        </span>

        <h2 className="contact-title reveal">
          HAVE SOMETHING
          <br />
          IN MIND<span>?</span>
        </h2>

        <div className="contact-socials reveal">
          <a
            href="https://github.com/KUNSH-bit"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            GITHUB
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.linkedin.com/in/kunsh-agarwal-bb3392416/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
            LINKEDIN
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.instagram.com/kunsh_error.404/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={17} />
            INSTAGRAM
            <ArrowUpRight size={13} />
          </a>
        </div>

        <a
          href="mailto:kunsh.agarwak26b@iiitg.ac.in"
          className="contact-button"
        >
          <Mail size={19} />
          GET IN TOUCH
          <ArrowUpRight size={19} />
        </a>

        <p className="contact-description">
          Open to interesting projects, collaborations
          and learning opportunities.
        </p>
      </div>
    </section>
  );
}

export default Contact;
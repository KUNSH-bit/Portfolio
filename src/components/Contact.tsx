
import SocialIcon from "./SocialIcons";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/KUNSH-bit",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kunsh-agarwal-bb3392416/",
    icon: "linkedin" as const,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/",
    icon: "instagram" as const,
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="eyebrow reveal">HAVE A PROJECT IN MIND?</p>

        <h2 className="contact-title">
          LET'S BUILD
          <br />
          SOMETHING.
        </h2>

        <div className="contact-socials reveal">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <SocialIcon name={social.icon} />
              <span>{social.name}</span>
              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>

        <a className="contact-email" href="mailto:YOUR_EMAIL@example.com">
          GET IN TOUCH ↗
        </a>
      </div>
    </section>
  );
}

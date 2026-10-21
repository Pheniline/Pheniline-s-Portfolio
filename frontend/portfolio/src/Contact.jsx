import { useState } from "react";
import "./App.css";

const contactLinks = [
  {
    name: "Email Me",
    detail: "Let's talk about your idea",
    symbol: "✉",
    href: "mailto:phennyjer@gmail.com",
    className: "email",
  },
  {
    name: "GitHub",
    detail: "Explore my code",
    symbol: "⌘",
    href: "https://github.com/Pheniline",
    className: "github",
  },
  {
    name: "LinkedIn",
    detail: "Let's connect professionally",
    symbol: "in",
    href: "www.linkedin.com/in/pheniline-jerono",
    className: "linkedin",
  },
  {
    name: "WhatsApp",
    detail: "Let's have a conversation",
    symbol: "↗",
    href: "https://wa.me/0721411241",
    className: "whatsapp",
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "YOUR_EMAIL@example.com";

    const subject = encodeURIComponent(
      form.subject || `Portfolio enquiry from ${form.name}`,
    );

    const body = encodeURIComponent(
      `Hello,\n\nMy name is ${form.name}.\nMy email is ${form.email}.\n\n${form.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <header className="contact-heading reveal">
          <span className="contact-eyebrow">
            <span className="contact-pulse" />
            YOUR NEXT IDEA STARTS HERE
          </span>

          <h2>
            Let's Create
            <span> Something Beautiful.</span>
          </h2>

          <p>
            Have a project in mind, an opportunity to share, or simply want to
            connect? My inbox is open. Let's turn a little curiosity into
            something extraordinary.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="contact-note">
              <span className="contact-note-icon">✧</span>

              <div>
                <h3>Have a little idea?</h3>
                <p>
                  I'd love to hear about it. From web development to
                  engineering-inspired innovations, let's explore the
                  possibilities.
                </p>
              </div>
            </div>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  className={`contact-link ${link.className}`}
                  href={link.href}
                  key={link.name}
                  target={link.className === "email" ? undefined : "_blank"}
                  rel={link.className === "email" ? undefined : "noreferrer"}
                >
                  <span className="contact-link-symbol">{link.symbol}</span>

                  <span className="contact-link-text">
                    <strong>{link.name}</strong>
                    <small>{link.detail}</small>
                  </span>

                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>

            <div className="contact-signature">
              <span>MADE WITH</span>
              <span className="signature-heart">♥</span>
              <span>AND A LITTLE MAGIC</span>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="contact-form-header">
              <span className="form-sparkle">✦</span>
              <div>
                <h3>Send a little hello</h3>
                <p>Fill in the details below to get in touch.</p>
              </div>
            </div>

            <div className="contact-input-row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="What should I call you?"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What's on your mind?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Your message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a little about your idea..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button className="contact-submit" type="submit">
              <span>Let's Talk</span>
              <span className="submit-arrow">↗</span>
            </button>

            <p className="contact-form-footnote">
              ✧ Your email app will open with your message ready.
            </p>
          </form>
        </div>

        <footer className="contact-footer">
          <span className="contact-footer-line" />
          <p>UNTIL THEN, KEEP DREAMING IN COLOUR.</p>
          <span className="contact-footer-line" />
        </footer>
      </div>
    </section>
  );
}

export default Contact;

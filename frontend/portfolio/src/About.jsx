function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content reveal">
        <p className="about-label">GET TO KNOW ME</p>

        <h2>
          Engineering the future
          <span>Building it with code</span>
        </h2>

        <p className="about-description">
          I'm an Electrical Engineering student and aspiring Full Stack
          Developer passionate about technology, intelligent systems, and
          solving real-world problems.
        </p>

        <p className="about-description">
          I enjoy exploring the intersection of electrical engineering, software
          development, and AI to create practical solutions with real impact.
        </p>
      </div>

      <div className="about-tags reveal">
        <div className="neon-tag tag-one">
          <span className="tag-number">01</span>
          <span>Electrical Engineering</span>
          <span className="tag-dot"></span>
        </div>

        <div className="neon-tag tag-two">
          <span className="tag-number">02</span>
          <span>Full Stack Developer</span>
          <span className="tag-dot"></span>
        </div>

        <div className="neon-tag tag-three">
          <span className="tag-number">03</span>
          <span>Artificial Intelligence</span>
          <span className="tag-dot"></span>
        </div>

        <div className="neon-tag tag-four">
          <span className="tag-number">04</span>
          <span>Tech Innovation</span>
          <span className="tag-dot"></span>
        </div>

        <p className="tags-caption">DIFFERENT FIELDS. ONE VISION.</p>
      </div>
    </section>
  );
}
export default About;

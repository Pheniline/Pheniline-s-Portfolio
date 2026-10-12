import "./App.css";
function About() {
  return (
    <section id="about" className="about-section">
      <p className="about-label">.1 GET TO KNOW ME</p>

      <h2>
        Engineering the future
        <br>
          <span>Building it with code</span>
        </br>
      </h2>

      <p className="about-description">
        I'm an Electrical Engineering student and aspiring Full Stack Developer
        passionate about technology, intelligent systems, and solving real-world
        problems.
      </p>

      <p className="about-description">
        I enjoy exploring the intersection of electrical engineering, software
        development, and AI to create practical solutions with real impact.
      </p>

      <div className="about-tags">
        <span>Electrical Engineering</span>
        <span>Full Stack Development</span>
        <span>AI Enthusiast</span>
        <span>Innovation</span>
      </div>
    </section>
  );
}
export default About;

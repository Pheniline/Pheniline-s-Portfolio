import "./App.css";
function Home() {
  const name = "Pheniline Jerono";
  const profession = "Electrical Engineer & Full Stack Web Developer";
  /* The name & Profession variables */

  return (
    <main>
      <nav>
        <a href="#home">PHENILINE JERONO KEMBOI</a>

        <div>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT ME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">TECHNOLOGICAL STACK</a>
          <a href="contact">CONTACT</a>
        </div>
      </nav>

      <section id="home">
        <div className="float-shapes" aria-hidden="true">
          <span className="orb orb-one"></span>
          <span className="orb orb-two"></span>
          <span className="orb orb-three"></span>
          <span className="chrome-ring"></span>
        </div>
        <div className="float-shapes" aria-hidden="true">
          <span className="orb orb-one"></span>
          <span className="orb orb-two"></span>
          <span className="orb orb-three"></span>
          <span className="chrome-ring"></span>
        </div>
        <p>I'm </p>
        <h1>{name}</h1>
        <h2>{profession}</h2>

        <p>
          {" "}
          I build digital experiences and explore how software, electrical
          engineering, and AI can solve real-world problems.
        </p>

        <a href="#projects">View my Projects</a>
        <a href="#contact">Hire me</a>
      </section>
    </main>
  );
}
export default Home;

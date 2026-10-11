import " ./App.css";
function Home() {
  const name = "Pheniline Jerono";
  const profession = "Electrical Engineer & Full Stack Web Developer";
  /* The name & Profession variables */

  return (
    <main>
      <nav>
        <a href="#home">Pheniline</a>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#skils">Technological Stack</a>
          <a href="contact">Contact</a>
        </div>
      </nav>

      <section id="Home">
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
export default App;

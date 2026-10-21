import useTyping from "./useTyping";

const name = "Pheniline Jerono Kemboi";
const profession =
  "Electrical Engineer | Full Stack Web Developer | AI Engineer";

function Home() {
  const typed = useTyping(profession, 55);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <header>
        <nav>
          <a href="#home">{name.toUpperCase()}</a>
          <div>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT ME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">TECHNOLOGICAL STACK</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
      </header>

      <section id="home" onMouseMove={handleMouseMove}>
        <p>I'm</p>
        <h1>{name}</h1>
        <h2 className="typing" aria-label={profession}>
          {typed}
        </h2>
        <p>
          I build digital experiences and explore how software, electrical
          engineering, and AI can solve real-world problems.
        </p>

        <a href="#projects">View my Projects</a>
        <a href="#contact">Hire me</a>
      </section>
    </>
  );
}
export default Home;

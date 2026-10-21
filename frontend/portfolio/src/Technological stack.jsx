import "./App.css";

const techGroups = [
  {
    title: "FRONTEND",
    subtitle: "THE VISUAL EXPERIENCE",

    className: "frontend",
    technologies: [
      { name: "HTML5", symbol: "5", level: "Core" },
      { name: "CSS3", symbol: "✿", level: "Core" },
      { name: "JavaScript", symbol: "JS", level: "Core" },
      { name: "React", symbol: "⚛", level: "Core" },
      { name: "Vite", symbol: "ϟ", level: "Core" },
    ],
  },
  {
    title: "BACKEND ",
    subtitle: "POWERING THE LOGIC",

    className: "backend",
    technologies: [
      { name: "Node.js", symbol: "⬡", level: "Core" },
      { name: "Express.js", symbol: "Ex", level: "Core" },
      { name: "REST APIs", symbol: "{ }", level: "Core" },
      { name: "SQL", symbol: "▤", level: "Core" },
    ],
  },
  {
    title: "ENGINEERING LAB",
    subtitle: "BEYOND THE SCREEN",

    className: "engineering",
    technologies: [
      { name: "Python", symbol: "Py", level: "Developing" },
      { name: "Electrical Engineering", symbol: "ϟ", level: "Domain" },
      { name: "UI/UX Design", symbol: "◈", level: "Developing" },
      { name: "Git & GitHub", symbol: "⌘", level: "Tools" },
    ],
  },
];

function TechStack() {
  return (
    <section className="tech-section" id="tech-stack">
      <div className="tech-container">
        <header className="tech-heading reveal">
          <span className="tech-eyebrow">
            <span className="tech-live-dot" />
            BEHIND THE PIXELS
          </span>

          <h2>
            My Technological <span>Stack</span>
          </h2>

          <p>
            The tools, languages, and technologies I use to turn curious ideas
            into digital experiences.
          </p>
        </header>

        <div className="tech-universe">
          <div className="tech-orbit orbit-a" />
          <div className="tech-orbit orbit-b" />
          <div className="tech-orbit orbit-c" />

          <div className="tech-core">
            <span className="core-title">MY</span>
            <span className="core-main">TECH </span>
            <span className="core-caption">STACK</span>
          </div>

          {techGroups.map((group, index) => (
            <article
              className={`tech-group ${group.className}`}
              key={group.className}
            >
              <div className="tech-group-heading">
                <span className="tech-group-icon">{group.icon}</span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>

                <span className="tech-group-number">0{index + 1}</span>
              </div>

              <div className="tech-items">
                {group.technologies.map((tech, techIndex) => (
                  <div
                    className="tech-tile"
                    key={tech.name}
                    style={{
                      "--tile-index": techIndex,
                    }}
                  >
                    <span className="tech-symbol">{tech.symbol}</span>

                    <span className="tech-name">{tech.name}</span>

                    <span className="tech-level">{tech.level}</span>

                    <span className="tech-tile-glint" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="tech-bottom reveal">
          <span className="tech-bottom-line" />
          <p>
            <span>01</span> — LEARN
            <span className="tech-bottom-star">✦</span>
            <span>02</span> — BUILD
            <span className="tech-bottom-star">✦</span>
            <span>03</span> — EVOLVE
          </p>
          <span className="tech-bottom-line" />
        </div>
      </div>
    </section>
  );
}

export default TechStack;

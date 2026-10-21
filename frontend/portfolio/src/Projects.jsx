import "./App.css";

const projects = [
  {
    id: "01",
    title: "Personal Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "My personal corner of the internet, showcasing my development journey, technical skills, and the projects I bring to life.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    status: "IN PROGRESS",
    icon: "✧",
    link: null,
  },
  {
    id: "02",
    title: "Student Life Hub",
    category: "WEB APPLICATION",
    description:
      "A student-focused platform concept designed to make useful academic resources and student tools easier to access.",
    technologies: ["React", "JavaScript", "CSS"],
    status: "IN PROGRESS",
    icon: "⌘",
    link: null,
  },
  {
    id: "03",
    title: "Future Innovations",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "Exploring new ways to combine software, engineering, and creative problem-solving into meaningful digital solutions.",
    technologies: ["Node.js", "Express", "Databases"],
    status: "EXPLORING",
    icon: "⟡",
    link: null,
  },

  {
    id: "04",
    title: "GridGuard",
    category: "SMART GRID TECHNOLOGY",
    description:
      "An innovative electricity monitoring concept focused on smart transformer monitoring and electricity theft detection, bringing software and electrical engineering together to explore smarter grid management.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
    ],
    status: "IN DEVELOPMENT",
    icon: "ϟ",
    link: null,
    featured: true,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading reveal">
          <span className="projects-label">
            <span className="projects-label-dot" />A LITTLE OF WHAT I CREATE
          </span>

          <h2>
            My Creative <span>Universe</span>
          </h2>

          <p>
            Every project is an opportunity to experiment, learn something new,
            and turn an idea into something real.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal project-card-${index + 1}`}
              key={project.id}
            >
              <div className="project-top">
                <span className="project-index">/ {project.id}</span>

                <span className="project-status">
                  <span className="project-status-dot" />
                  {project.status}
                </span>
              </div>

              <div className="project-art">
                <div className="project-art-glow" />

                <div className="project-orbit project-orbit-one" />
                <div className="project-orbit project-orbit-two" />

                <span className="project-art-symbol">{project.icon}</span>

                <span className="project-art-caption">{project.category}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore project <span>↗</span>
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">
                    Project details coming soon <span>✧</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer className="projects-footer">
          <span />
          <p>MADE WITH CURIOSITY & A LITTLE MAGIC</p>
          <span />
        </footer>
      </div>
    </section>
  );
}

export default Projects;

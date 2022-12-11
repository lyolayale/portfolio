class App extends React.Component {
  state = {
    nav: [
      { item: "projects", id: 1 },
      { item: "skill", id: 2 },
      { item: "about", id: 3 },
      { item: "contact me", id: 4 },
    ],
    projects: Projects,
    skills: DevSkills,
    stack: TechStack,
  };
  render() {
    return (
      <main>
        <header>
          <nav>
            <ul>
              {this.state.nav.map(el => (
                <li key={el.id}>
                  <p>{el.item}</p>
                </li>
              ))}
            </ul>
          </nav>

          <section className="intro">
            <h1>Hello there, I'm Eric McKee!</h1>
            <h2>
              I'm a Front End Web Developer who creates and designs beautiful,
              memeorable websites and programs.
            </h2>
          </section>
        </header>
        {/* project list */}
        <section className="project-list">
          <h2>Projects</h2>
          {this.state.projects.map(project => {
            return (
              <section key={project.id} className="project">
                <img src={project.img} alt="Project image" />
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="skill-set">
                  <p>
                    <span>Skills: </span>
                    {project.skills}
                  </p>
                  <p>
                    <span>Tools: </span>
                    {project.tools}
                  </p>
                </div>
                <button>Live Page</button>
              </section>
            );
          })}
        </section>
        {/* skills */}
        <section className="skills">
          <h3>Skills</h3>

          <ul className="developer-skills">
            <h4>Developer Skills</h4>
            {this.state.skills.map(project => (
              <li key={project.id}>
                <p>{project.skill}</p>
              </li>
            ))}
          </ul>
          <ul className="tech-stack">
            <h4>Tech Stack</h4>
            {this.state.stack.map(project => (
              <li key={project.id}>
                <p>{project.skill}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

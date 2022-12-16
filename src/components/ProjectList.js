function ProjectList(props) {
  return (
    <section className="project-list-wrapper">
      <h2 id="projects">Projects</h2>
      <div className="project-list">
        {props.projects.map(project => {
          return (
            <section key={project.id} className="project">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt="Project" />
              </a>
              <h3>{project.title}</h3>
              <div className="project-description-wrapper">
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
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button>Live Page</button>
              </a>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectList;

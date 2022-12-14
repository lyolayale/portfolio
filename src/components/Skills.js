function Skills(props) {
  return (
    <section className="skills-wrapper">
      <h3 id="skill">Skills</h3>
      <div className="skills">
        <ul className="developer-skills">
          <h4>Developer Skills</h4>
          <div className="skills-container">
            {props.skills.map(project => (
              <li key={project.id}>
                <p>{project.skill}</p>
              </li>
            ))}
          </div>
        </ul>
        <ul className="tech-stack">
          <h4>Tech Stack</h4>
          <div className="tech-stack-container">
            {props.stack.map(project => (
              <li key={project.id}>
                <p>{project.skill}</p>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}

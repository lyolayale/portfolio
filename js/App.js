class App extends React.Component {
  state = {
    nav: [
      { item: "projects", id: 1 },
      { item: "skill", id: 2 },
      { item: "about", id: 3 },
      { item: "contact me", id: 4 },
    ],
    projects: [
      {
        image: "./images/github-gallery.png",
        title: "GitHub Repo Gallery",
        description:
          "This JavaScript powered interactive website allows a user to take a peek and search my GitHub repo! This is all made possible by async/await fetches to the awesome GitHub API!",
        skills: ["API", " DOM Manipulation", " JavaScript", " Async/Await"],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/github-repo-gallery/",
        id: 1,
      },
    ],
    year: new Date().getFullYear(),
    me: "./images/profile.png",
    skills,
    stack,
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
            <h1>Hello, I'm Eric McKee!</h1>
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
                <a href={project.link} target="_blank">
                  <img src={project.image} alt="Project image" />
                </a>
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
                <a href={project.link} target="_blank">
                  <button>Live Page</button>
                </a>
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
        <section className="about-me">
          <div className="img-wrapper">
            <img src={this.state.me} alt="Profile Image" />
          </div>
          <section className="about-me-body">
            <h2>Hello! I'm Eric McKee</h2>
            <h3>
              I'm a Front End Web Developer with a passion for creating clean,
              responsive websites.
            </h3>
            <p>
              I've always been interested in computers but never thought I would
              actually learn how to do the whole computer thing, but here I am!
              Due to the COVID situation a decided to go back to school and
              finish my bachelors degree due to being laid off, I felt so
              invigorated by obtaining my degree, I was like ... "What else can
              I do?" And, here we are folks, lol. When I'm not on the computer
              trying to learn or create something, I enjoy watching 80's movies
              and listening to 90's music, eating too much Skittles and drinking
              too much coffee.
            </p>
            <p>Can't wait to work with you!</p>
          </section>
        </section>
        <footer>
          <h2>Let's Connect</h2>
          <h3>Hire me</h3>
          <div className="contact">
            <p>281-536-3681</p>
            <p>lyolayale19@gmail.com</p>
          </div>
          <h4 className="follow-me">Follow me</h4>
          <div className="social-media">
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-github"></i>
          </div>
          <h4 className="meet-me">Meet me</h4>
          <div className="meet-up">
            <p>East Texas</p>
            <p>Lets go to meetups together!</p>
          </div>
          <p className="copyright">
            &copy; Copyright {this.state.year} | Eric McKee
          </p>
        </footer>
      </main>
    );
  }
}

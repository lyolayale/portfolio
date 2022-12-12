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

      {
        image: "./images/name-tag-generator.png",
        title: "Name Tag Generator",
        description:
          "This program is powered by the React Lifecycle Methods and in conjunction with the local storage methods, allowing the user to have fun creating and saving new name tags!",
        skills: ["ES6", " JSX", " Data Flow Management"],
        tools: ["CodeSandbox", " GitHub", " Commmand Line"],
        link: "https://y8cmmn.csb.app/",
        id: 2,
      },
      {
        image: "./images/guess-the-word-game.png",
        title: "Guess the Word",
        description:
          "This JavaScript powered program uses async/await, JS methods and JS conditionals,  allowing  the user to have a fun and interactive time trying to guess the correct “word”!",
        skills: [
          "DOM Manipulation",
          " Vanilla JavaScript",
          " Async/Await",
          "Event Listeners",
        ],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/guess-the-word/",
        id: 3,
      },
      {
        image: "./images/sticky-notes.png",
        title: "Sticky Notes",
        description:
          "This JavaScript powered interactive website allows a user to take a peek and search my GitHub repo! This is all made possible by async/await fetches to the awesome GitHub API!",
        skills: ["ES6", " JSX", " Data Flow Management", " Command Line"],
        tools: ["CodeSandbox", " GitHub", " Command Line"],
        link: "https://tmeer1.csb.app/",
        id: 4,
      },
      {
        image: "./images/unplugged.png",
        title: "Unplugged",
        description:
          "This fun, multi-page website demonstrates how awesome CSS media queries and CSS Flex-box combined with the “mobile first” design pattern can work in harmony with each other!",
        skills: [
          "CSS/Flexbox",
          " HTML5",
          " Responsive Design",
          " Media Queries",
        ],
        tools: ["Photoshop", " Photopea", " GitHub"],
        link: "https://lyolayale.github.io/unplugged/",
        id: 5,
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
        <section className="project-list-wrapper">
          <h2>Projects</h2>
          <div className="project-list">
            {this.state.projects.map(project => {
              return (
                <section key={project.id} className="project">
                  <a href={project.link} target="_blank">
                    <img src={project.image} alt="Project image" />
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
                  <a href={project.link} target="_blank">
                    <button>Live Page</button>
                  </a>
                </section>
              );
            })}
          </div>
        </section>
        {/* skills */}
        <section className="skills-wrapper">
          <h3>Skills</h3>
          <div className="skills">
            <ul className="developer-skills">
              <h4>Developer Skills</h4>
              <div className="skills-container">
                {this.state.skills.map(project => (
                  <li key={project.id}>
                    <p>{project.skill}</p>
                  </li>
                ))}
              </div>
            </ul>
            <ul className="tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-stack-container">
                {this.state.stack.map(project => (
                  <li key={project.id}>
                    <p>{project.skill}</p>
                  </li>
                ))}
              </div>
            </ul>
          </div>
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
          <div className="footer-wrapper">
            <section className="hire-me-container">
              <h3>Hire me</h3>
              <div className="contact">
                <p>281-536-3681</p>
                <p>lyolayale19@gmail.com</p>
              </div>
            </section>
            <section className="follow-me-container">
              <h4 className="follow-me">Follow me</h4>
              <div className="social-media">
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-github"></i>
              </div>
            </section>
            <section className="meet-up-container">
              <h4 className="meet-me">Meet me</h4>
              <div className="meet-up">
                <p>East Texas</p>
                <p>Lets go to meetups together!</p>
              </div>
            </section>
          </div>
          <p className="copyright">
            &copy; Copyright {this.state.year} | Eric McKee
          </p>
        </footer>
      </main>
    );
  }
}

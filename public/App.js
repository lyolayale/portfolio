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
        skills: ["ES6", " JSX", " Data Flow Management", " Event Listeners"],
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
          " Event Listeners",
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
        <Header nav={this.state.nav} />
        <ProjectList projects={this.state.projects} />
        <Skills skills={this.state.skills} stack={this.state.stack} />
        <AboutMe me={this.state.me} />
        <Footer year={this.state.year} />
      </main>
    );
  }
}

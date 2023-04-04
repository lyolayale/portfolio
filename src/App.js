import React from "react";

// ==========================
// ===== js component files =====
// ==========================

import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import { skills, stack, email, linkedin, githubLink } from "./js/data";

// =====================
// ===== css files =====
// =====================

import "../src/css/main.css";
import "../src/css/normalize.css";

// ==================
// ===== images =====
// ==================

import github from "./images/github-gallery.png";
import word from "./images/guess-the-word-game.png";
import name from "./images/name-tag-generator.png";
import notes from "./images/sticky-notes.png";
import unplugged from "./images/unplugged.png";
import profile from "./images/profile.png";
import noteCard from "./images/note-card.png";
import tenzie from "./images/tenzie.png";
import airBnb from "./images/air-bnb.png";

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
        image: tenzie,
        title: "Tenzies Game",
        description:
          "This mobile responsive Tenzie game is power by React.js with modern React hooks. Have fun matching the numbers and enjoy experiencing the cool CSS effects. ",
        skills: [
          "ES6",
          " React.js",
          " Responsive Design",
          " Local Storage API",
        ],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/tenzie/",
        id: 7,
      },
      {
        image: github,
        title: "GitHub Repo Gallery",
        description:
          "This JavaScript powered interactive website allows a user to take a peek and search my GitHub repo! This is all made possible by async/await fetches to the awesome GitHub API!",
        skills: ["API", " DOM Manipulation", " JavaScript", " Async/Await"],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/github-repo-gallery/",
        id: 1,
      },
      {
        image: notes,
        title: "Sticky Notes",
        description:
          "This React.js driven program is designed with class and functional based components, implemented by the React lifecycle methods; allowing a user to modify the stick notes!",
        skills: ["ES6", " JSX", " Data Flow Management", " Command Line"],
        tools: ["CodeSandbox", " GitHub", " Command Line"],
        link: "https://tmeer1.csb.app/",
        id: 4,
      },
      {
        image: name,
        title: "Name Tag Generator",
        description:
          "This program is powered by the React Lifecycle Methods and in conjunction with the local storage methods, allowing the user to have fun creating and saving new name tags!",
        skills: ["ES6", " JSX", " Data Flow Management", " Event Listeners"],
        tools: ["CodeSandbox", " GitHub", " Commmand Line"],
        link: "https://y8cmmn.csb.app/",
        id: 2,
      },
      {
        image: word,
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
        image: unplugged,
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
      {
        image: noteCard,
        title: "Note Card App",
        description:
          "This mobile responsive note card appliation is powered by React.js and JSX. Enjoy making notes and reminders with this eye pleasing application.",
        skills: ["ES6", " React.js", " Responsive Design", " CSS/Flexbox"],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/note_card/",
        id: 6,
      },
      {
        image: airBnb,
        title: "Mini AirBnb Clone",
        description:
          "This mini AirBnb Clone is built with React.js and JSX. This simple, yet elegant website is mobile responsive and due to the CSS implentations, it feels warm and easy on the eyes.",
        skills: [
          "ES6",
          " React.js",
          " Responsive Design",
          " Local Storage API",
        ],
        tools: ["GitHub", " GitHub Pages", " Command Line"],
        link: "https://lyolayale.github.io/mini-airbnb-clone/",
        id: 8,
      },
    ],
    year: new Date().getFullYear(),
    me: profile,
    skills,
    stack,
    email,
    linkedin,
    githubLink,
  };
  render() {
    return (
      <main>
        <img src="../github-gallery.png" alt="" />
        <Header nav={this.state.nav} />
        <ProjectList projects={this.state.projects} />
        <Skills skills={this.state.skills} stack={this.state.stack} />
        <AboutMe me={this.state.me} />
        <Footer
          year={this.state.year}
          email={this.state.email}
          linkedin={this.state.linkedin}
          githubLink={this.state.githubLink}
        />
      </main>
    );
  }
}

export default App;

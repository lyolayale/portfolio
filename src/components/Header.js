function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          {props.nav.map(el => {
            if (el.item === "projects") {
              return (
                <li key={el.id}>
                  <p>
                    <a href="#projects">{el.item}</a>
                  </p>
                </li>
              );
            } else if (el.item === "skill") {
              return (
                <li key={el.id}>
                  <p>
                    <a href="#skill">{el.item}</a>
                  </p>
                </li>
              );
            } else if (el.item === "about") {
              return (
                <li key={el.id}>
                  <p>
                    <a href="#about">{el.item}</a>
                  </p>
                </li>
              );
            } else if (el.item === "contact me") {
              return (
                <li key={el.id}>
                  <p>
                    <a href="#contact-me">{el.item}</a>
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </nav>

      <section className="intro">
        <h1>
          Hello, I'm <span className="header my-name">Eric McKee</span>!
        </h1>
        <h2>
          <span className="job-title">Web Developer</span> who creates and
          designs beautiful, memorable websites and programs.
        </h2>
      </section>
    </header>
  );
}

export default Header;

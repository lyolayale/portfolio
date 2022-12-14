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
        <h1>Hello, I'm Eric McKee!</h1>
        <h2>
          I'm a Front End Web Developer who creates and designs beautiful,
          memeorable websites and programs.
        </h2>
      </section>
    </header>
  );
}

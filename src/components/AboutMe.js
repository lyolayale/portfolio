function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="img-wrapper">
        <img src={props.me} alt="Profile Image" />
      </div>
      <section className="about-me-body">
        <h2 id="about">Hello! I'm Eric McKee.</h2>
        <h3>
          I'm a Front End Web Developer with a passion for creating clean,
          responsive websites.
        </h3>
        <p>
          I've always been interested in computers but never thought I would
          actually learn how to do the whole computer thing, but here I am! Due
          to the COVID situation a decided to go back to school and finish my
          bachelors degree due to being laid off, I felt so invigorated by
          obtaining my degree, I was like ... "What else can I do?" And, here we
          are folks, lol. When I'm not on the computer trying to learn or create
          something, I enjoy watching 80's movies and listening to 90's music,
          eating too much Skittles and drinking too much coffee.
        </p>
        <p>Can't wait to work with you!</p>
      </section>
    </section>
  );
}

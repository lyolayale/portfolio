function Footer(props) {
  return (
    <footer>
      <h2 id="contact-me">Let's Connect</h2>
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
      <p className="copyright">&copy; Copyright {props.year} | Eric McKee</p>
    </footer>
  );
}

export default Footer;

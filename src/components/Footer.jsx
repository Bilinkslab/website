import Typewriter from "typewriter-effect";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="main-content">
        <div className="head">
          <h1>
            Are you looking for{" "}
            <b>
              <Typewriter
                options={{
                  strings: [
                    "Web Development?",
                    "Search Engine Optimization?",
                    "Mobile App Development?",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </b>
          </h1>
        </div>
        <div className="main">
          <section className="contact">
            <span className="ready">Let's get</span>
            <span className="ready">to work</span>
            <a href="/">Contact Us</a>
          </section>
          <section className="info">
            <h2>Quick Links</h2>
            <div className="divider"></div>
            <ul>
              <li><a href="/">Career</a></li>
              <li><a href="/">FAQ's</a></li>
              <li><a href="/">Case Studies</a></li>
            </ul>
          </section>
        </div>
        <div className="foot">
          &copy; 2023. All rights reserved by <b>BiLinks Lab</b>.
        </div>
      </div>
    </footer>
  );
}

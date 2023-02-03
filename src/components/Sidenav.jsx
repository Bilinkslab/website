export default function Sidenav() {
  return (
    <nav className="sidenav">
      <div className="nav-content">
        <label htmlFor="sideNav" className="close">X</label>
        <div className="links">
          <div>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Career</a>
            <a href="/">Portfolio</a>
            <a href="/">Hire a developer</a>
            <a href="/">Contact Us</a>
            <br />
            <hr />
            <br />
            <div className="social-links">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

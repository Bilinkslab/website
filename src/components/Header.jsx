export default function Header(props) {
  return (
    <>
      <input type="checkbox" className="sidenav-class" id="sideNav" />
      <input type="checkbox" className="sidenav-class" id="slideBanner" />
      <header className="header">
        <div className="logo">
          <img src={require("../assets/images/logo.png")} alt="Logo" />
        </div>
        <div className="links">
          <label htmlFor="sideNav" className="fa fa-bars"></label>
        </div>
      </header>
    </>
  );
}

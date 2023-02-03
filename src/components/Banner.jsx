import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <div className="banner">
      <div className="main-content">
        <span className="h1">Welcome to</span>
        <span className="h2">BiLinks Lab</span>
        <span className="h3">
          Are you looking for{" "}
          <Typewriter
            options={{
              strings: [
                "Web Development",
                "Search Engine Optimization",
                "Mobile App Development",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span className="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ex
          rem reiciendis? Eaque sequi praesentium laboriosam illum voluptates
          expedita vel adipisci rem iure. Laboriosam dolorem, laudantium sint
          aspernatur quos dolor!
        </span>
        <div className="explorer">
          <label htmlFor="slideBanner" className="explore">EXPLORE</label>
        </div>
      </div>
      <div className="social-links">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
      </div>
    </div>
  );
}

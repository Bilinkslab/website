import style from "../assets/css/about.module.css";

export default function AboutUs(props) {
  return (
    <div className={style.about}>
      <div className={style.imgContainer}>
        <div className={style.aboutCol1}>
          <img
            src={require("../assets/images/about-img-1.jpg")}
            alt="about image"
          />
        </div>
        <div className={style.aboutCol2}>
          <div className="about-img-2">
            <img
              src={require("../assets/images/about-img-2.jpg")}
              alt="about image"
            />
          </div>
          <div className="about-img-3">
            <img
              src={require("../assets/images/about-img-3.jpg")}
              alt="about image"
            />
          </div>
        </div>
      </div>
      <div className={style.aboutMain}>
        <h1>About Us</h1>
        <h2>Unlimited Skills For <span>Web Development.</span></h2>
        <div className={style.aboutContent}>
          <p>
            As a Best Software Development Company in Lahore. We provide top
            NOTCH Solution for your Business / Organization. We also provide
          </p>
          <div>
            <ul>
              <li>Customized WebDevelopment</li>
              <li>Wordpress Development</li>
              <li>E-Commerce Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>
        <div className={style.aboutBtn}>
          <button className={style.btnText}>Get Offer</button>
        </div>
      </div>
    </div>
  );
}

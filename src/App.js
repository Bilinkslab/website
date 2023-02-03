import "./assets/css/main.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div>
      <Header />
      <Sidenav />
      <Banner />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

import Banner from "./components/Banner";
import "./assets/css/main.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Sidenav />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

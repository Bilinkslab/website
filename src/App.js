import "./assets/css/main.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sidenav from "./components/Sidenav";
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

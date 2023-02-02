import Banner from "./components/Banner";
import "./assets/css/main.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
function App() {
  return (
    <div>
      <Header />
      <Sidenav />
      <Banner />
    </div>
  );
}

export default App;

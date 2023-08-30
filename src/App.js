import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Present from "./components/Present";
import Affliation from "./components/Affliation";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Detail from "./components/Detail";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shop />
      <Detail />
      <Present />
      <Service />
      <Affliation />
      <Testimonial />
    </div>
  );
}

export default App;

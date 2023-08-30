import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Present from "./components/Present";
import Affliation from "./components/Affliation";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shop />
      <Detail />
      <Present />
      <Affliation />
      <Testimonial />
    </div>
  );
}

export default App;

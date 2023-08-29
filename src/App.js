import logo from "./logo.svg";
import "./App.css";
import Shop from "./components/Shop";
import Present from "./components/Present";
import Affliation from "./components/Affliation";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Shop />
      <Present />
      <Affliation />
      <Testimonial />
    </div>
  );
}

export default App;

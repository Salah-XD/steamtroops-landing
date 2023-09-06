import "./App.css";
import Shop from "./components/Shop";
import Present from "./components/Present";
import Affliation from "./components/Affliation";
import Testimonial from "./components/Testimonial";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Detail from "./components/Detail";
import Service from "./components/Service";
import Kit from "./components/Kit";
import Accordion from "./components/Accordion";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shop />
      <Kit />
      <Detail />
      <Present />
      <Service />
      <Testimonial />
      <Affliation />
      <Accordion />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

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
import Newsletter from "./components/Newsletter";
import Incubation from "./components/Incubation";
import Prelaunch from "./components/Prelaunch";

function App() {
  const timeTillDate = '2023-10-31T23:59:59'; // Specify your final date and time here
  const timeFormat = 'YYYY-MM-DDTHH:mm:ss';

  return (
    <div className="App">
      <Header />
      <Prelaunch timeTillDate={timeTillDate} timeFormat={timeFormat} />

      {/* <Slide /> */}
      <Shop />
      <Kit />
      <Detail />
      <Affliation />
      <Incubation />

      <Present />
      {/* <Service /> */}
      {/* <Testimonial /> */}

      <Accordion />
      <Newsletter />
      <Banner />

      <Footer />
    </div>
  );
}

export default App;

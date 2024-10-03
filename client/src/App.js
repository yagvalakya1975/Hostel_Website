import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar.js";
import Home from "./Pages/Home/home.js";
import Events from "./Pages/Events/events.js";
import Complaints from "./Pages/Complaints/complaints.js";
import Council from "./Pages/Council/council.js";
import Footer from "./Components/footer.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import "./Styles/mediaqueries.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route path="/council" element={<Council />}></Route>
          <Route path="/complaints" element={<Complaints />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

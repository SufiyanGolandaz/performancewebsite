import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/layouts/navigation";
import { Header } from "./components/layouts/header";
import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Solutions from "./components/pages/Solutions";
import Layout from "./components/layouts/Layout";
import LandingPage from "./components/pages/LandingPage";
import Collaterals from "./components/pages/Colaterals";
import Partners from "./components/pages/Partners";
import Offerings from "./components/pages/Offerings";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} className="header" /> */}
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<About />} /> */}
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/collaterals" element={<Collaterals />}></Route>
          <Route path="/offerings" element={<Offerings />}></Route>
          <Route path="/partners" element={<Partners />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

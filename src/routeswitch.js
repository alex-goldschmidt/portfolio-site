import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar/index";
import About from "./components/About/index";

const RouteSwitch = () => {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Projects" element={<App />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;

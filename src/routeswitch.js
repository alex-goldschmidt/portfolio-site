import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar/index";
import About from "./components/About/index";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

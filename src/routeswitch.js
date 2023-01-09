import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar/index";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

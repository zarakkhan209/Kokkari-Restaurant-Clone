import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cuisin from "./components/Cuisin";
import Menus from "./components/Menus";
import Reservations from "./components/Reservations";
import PrivateDining from "./components/PrivateDining";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cuisins" element={<Cuisin />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/dining" element={<PrivateDining />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

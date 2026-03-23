import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Office from "./pages/Office";
import Consulting from "./pages/Consulting";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-light font-display">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/office" element={<Office />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

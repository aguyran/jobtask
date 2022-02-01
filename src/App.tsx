import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NoticeComponent from "./components/NoticeComponent";
import ColorChanger from "./components/ColorChanger";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState<string>("#222222");
  return (
    <div
      className="bg-owlBlack min-h-screen w-full flex flex-col relative pt-8"
      style={{ backgroundColor: theme }}
    >
      <NoticeComponent />
      <ColorChanger value={theme} setter={setTheme} />
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

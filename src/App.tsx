import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-owlBlack min-h-screen w-full flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-4">
        <Navbar />
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

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
function App() {
  return (
    <div className="bg-owlBlack min-h-screen w-full flex flex-col px-4">
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Reviews />
      </div>
    </div>
  );
}

export default App;

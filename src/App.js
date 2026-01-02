import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Menu from "./components/menu";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="page-content">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

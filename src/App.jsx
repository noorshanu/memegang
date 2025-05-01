import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/About";
import Tokenomics from "./components/Tokenimics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
      <Herosection />
      <AboutSection />
      <Tokenomics />
      <Footer />
    </>
  );
}

export default App

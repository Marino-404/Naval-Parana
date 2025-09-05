import Header from "./components/sections/Header";
import Home from "./components/sections/Home";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Customers from "./components/ui/Customers";
import Stats from "./components/ui/Stats";
import Services from "./components/sections/Services";
import Equipment from "./components/ui/Equipment";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Stats />
      <Equipment />
      <Customers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

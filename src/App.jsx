import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact/>
    </div>
  )
}

export default App

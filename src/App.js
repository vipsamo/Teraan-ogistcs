import Home from './pages/Home';
//import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Contact from './pages/Contact'
import Team from './pages/Team'
import Services from './pages/Services'
import About from './pages/About';
import Nav from './components/Nav'
import { Routes, Route, } from "react-router-dom";
import Clients from './pages/Clients';
function App() {
  return (
    <div >
      
    
      <Nav/>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/clients" element={<Clients/>} />
      </Routes>
      <Footer/>
     
     
    </div>
  );
}

export default App;

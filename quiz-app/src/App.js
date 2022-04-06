
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home.js";
import Rules from "./components/Rules.js";
import About from "./components/About.js";
import Auth from "./components/Auth.js";

function App(){


  return(

    <>
        
       <Routes>
            <Route path="/HOME" element={<Home />}>         
            </Route> 
            <Route path="/rules" element={<Rules/>}>           
            </Route> 
            <Route path="/about" element={<About />}>         
            </Route> 
            <Route path="/Auth" element={<Auth />}>         
            </Route> 
      
        </Routes>
    
    
      <Navbar/>
      


      <Footer />
    </>
  );
}

export default App;
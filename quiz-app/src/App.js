import {useState} from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home.js";
import Rules from "./components/Rules.js";
import About from "./components/About.js";
import Auth from "./components/Auth.js";
import StartScreen from "./components/StartScreen.js";
import Mainscreen from "./components/Mainscreen.js";

function App(){
  const [QuizStarted,getQuizStarted] = useState(false);

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
 
      <div className="Quiz-container">
        {
          QuizStarted ? (
            <Mainscreen retry ={()=> getQuizStarted(false)}/>
          ): (
            <StartScreen start  ={()=> getQuizStarted(true)}/>
          )
        }
        
      </div>


      <Footer />
    </>
  );
}

export default App;
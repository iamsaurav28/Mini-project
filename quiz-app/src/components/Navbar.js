import {Link} from 'react-router-dom';

function Navbar(){
     return(
       <div className="navbar">
            <div className="logo">QUIZ APP</div>
           <div className='link-container'>
            <Link className='links' to="/home"> Home</Link>
            <Link className='links' to="/rules"> Rules</Link>
            <Link className='links' to="/about"> About</Link>
            <Link className='links' to="/auth">login</Link>
           </div>
     
       </div>
     )
}

export default Navbar;
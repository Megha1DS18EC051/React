import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';

import Logo from './Components/Logo';
import HomePage from './Components/HomePage';
 import Profile from './Components/Profile';
 import Contact from './Components/Contact';
 import Vedio from './Components/Vedio';
 import Bio from './Components/Bio';
 import Protected from './Components/Protected';
 import Logout from './Components/Logout';
 import { Login } from './Components/Login';
 import Signup from './Components/Signup';

function App() {
  return (
            
       
       <Router>
        
      <nav className='group'>
      <div>
      <Logo/>
      </div>
      
      <Link to="/" style={{ marginRight: 50 }} className="style">HomePage</Link>
      <Link to="/Profile" style={{ marginRight: 50 }} className="style">Profile</Link>
      <Link to="Contact" style={{ marginRight: 50 }} className="style">Contact</Link>
      <Link to="/Vedio" style={{ marginRight: 50 }} className="style">Vedio</Link>
      <Link to="/Bio" style={{ marginRight: 50 }} className="style">Bio</Link>
      <Link to="/Login" style={{ marginRight: 50 }} className="style">Login</Link>
      <Link to="/Logout" style={{ marginRight: 50 }} className="style">Logout</Link>
      <Link to="/Signup" style={{ marginRight: 50 }} className="style">Signup</Link>
      
      </nav>
      <br></br>
      <br>
      </br>
      <Routes >
      
        <Route path="/" element={<Protected Component={HomePage}/>}></Route>
        
        <Route path="/Profile" element={<Protected Component={Profile}/>}></Route>
        <Route path="/Contact" element={<Protected Component={Contact}/>}></Route>
        
        <Route path="/Vedio" element={<Protected Component={Vedio}/>}></Route>
        <Route path="/Bio" element={<Protected Component={Bio}/>}></Route>
        <Route path="/Login" element={<Protected Component={Login}/>}></Route>
        <Route path="/Logout" element={<Protected Component={Logout}/>}></Route>
       <Route path="/Signup" element={<Signup/>}></Route>


        
        
      </Routes>
      <div class="foot">@C copyright symbol</div>
    </Router>
  
  );
}

export default App;

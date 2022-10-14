
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Protected from './Components/Protected';
import { Login } from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (

    <Router>
      <nav>
      <Link to="/" >Home</Link>
      <Link to="/AboutUs" >AboutUs</Link>
      
      <Link to="/Login" >Login</Link>
      <Link to="/Profile">Profile</Link>
    
      </nav>
      <Routes>
      <Route path="/" element={<Protected Component={Home}/>}></Route>
        
        <Route path="/AboutUs" element={<Protected Component={AboutUs}/>}></Route>
        
        
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;

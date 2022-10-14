
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Protected from './Components/Protected';

function App() {
  return (
   <Router>
    <nav>
    
    <Link to="/" >Dashboard</Link>
    <Link to="/Login" >Login</Link>
    
    </nav>
    <Routes>
    
    <Route path="/" element={<Protected Component={Dashboard}/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>

    </Routes>
   </Router>
  );
}

export default App;

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomeIcon from './Components/HomeIcon';
import OndemandVideo from '@mui/icons-material/OndemandVideo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <nav>
        <Link to="/"></Link>
        <Link to="/Components/OndemandVideo "></Link>
        </nav>
        <Routes>
        <Route path="/" element={<HomeIcon/>}></Route> 
        <Route path="/Components/OndemandVideo " element={<OndemandVideo />}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

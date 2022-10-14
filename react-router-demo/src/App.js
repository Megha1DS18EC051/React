import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import ElectronicPage from './pages/ElectronicPage';
import BakeryPage from './pages/BakeryPage';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}></Route>
    //     <Route path="/ElectronicPage" element={<ElectronicPage/>}></Route>
    //     <Route path="/BakeryPage" element={<BakeryPage/>}></Route>
    //     <Route path="/PageNotFound" element={<PageNotFound/>}></Route>
    //   </Routes>
    //   <div>Footer</div>
    // </Router>
    <Router>
      <nav className='group'>
      <Link to="/" style={{ marginRight: 50 }} className="style">Home</Link>
      <Link to="/ElectronicPage" style={{ marginRight: 50 }} className="style">ElectronicPage</Link>
      <Link to="/BakeryPage" style={{ marginRight: 50 }} className="style">BakeryPage</Link>
      <Link to="/Profile" style={{ marginRight: 50 }} className="style">Profile</Link>
      </nav>
      <br></br>
      <br>
      </br>
      <Routes>
      
        <Route path="/" element={<Home/>}></Route>
        
        <Route path="/ElectronicPage" element={<ElectronicPage/>}></Route>
        <Route path="/BakeryPage" element={<BakeryPage/>}></Route>
        {/* <Route path="/Profile" element={<Profile/>}></Route> */}
        <Route path="/Profile/:username/:id" element={<Profile/>}></Route>


        <Route path="*" element={<PageNotFound/>}></Route>
        
      </Routes>
      <div class="foot">Footer</div>
    </Router>
  );
}

export default App;

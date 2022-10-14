import React from 'react'
import UsingFetch from "./UsingFetch";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <Router>
            <nav>
                <Link to="/">UsingFetch</Link>
            </nav>
            <Routes>
                <Route path="/" element={<UsingFetch/>}></Route>
            </Routes>
        </Router>
    )
}

export default Navbar

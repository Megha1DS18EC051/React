import React from 'react'
import wel from './welcome.jpg'

const HomePage = (props) => {
    return (
        <div>
            <img src={wel} className="photo1" alt="welcome  logo"></img>
            <p>Facebook, American online social network service that is part of the company Meta Platforms. 
                Facebook was founded in 2004 by Mark Zuckerberg, Eduardo Saverin, Dustin Moskovitz, and 
                Chris Hughes, all of whom were students at Harvard University. 
                Facebook became the largest social network in the world, with nearly three billion users as of 2021,
                 and about half that number were using Facebook every day. 
                The company’s headquarters are in Menlo Park, California.</p>
        </div>
    )
}

export default HomePage

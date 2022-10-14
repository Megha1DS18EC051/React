import React from "react";
import UsingFetch from "./UsingFetch";



function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
       <>
       <UsingFetch/>
       <button onClick={handleClick}>Logout</button>
       
       
        </>
      
        
    )
}
export default Home;
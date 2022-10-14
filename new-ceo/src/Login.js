import React, { useRef } from "react";
import Home from "./Dashboard/Home";


function Login(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value==="megham1830@gmail.com"&&password.current.value==="1999"){
            localStorage.setItem("emailData","megham1839@gmail.com")
            localStorage.setItem("passwordData","1999")
        }
    }
   
    return(
        <div>
            {
                getEmail && getPassword ? <Home/>:
                
            <form onSubmit={handleSubmit} class="form">
                <div>
                    <label>Email:</label><br></br>
                    <input type="text" ref={email} />
                </div>
                <br></br>
                <div>
                <label>Password:</label><br></br>
                    <input type="password" ref={password} />
                </div>
                <br></br>
                <button class="login">Login</button>
            </form>
            }
        </div>
    );
}
export default Login;
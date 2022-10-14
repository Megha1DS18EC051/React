import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem(login==="true")
        navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate("/")
        }
        

    });
    return(
        <div>
            <label>Username:
                <br/>
                <input type="text"/>

            </label>
            <br></br>
            <label>password:
                <br/>
                <input type="text"/>

            </label><br></br>
            <button onClick={login}>Login</button>
            
        </div>
    )
}
export default Login
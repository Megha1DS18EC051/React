import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Profile = () => {
    // let navigate=useNavigate();
    // return (
       
    //     <div>
    //         <h1>This is a profile page</h1>
    //         <button onClick={()=>(navigate("/ElectronicPage"))}>go to electronic page</button>

    //     </div>
    // )

    let navigate=useNavigate();
    let {username,id}=useParams();
    return (
       
        <div>
            <h1>This is a profile page of {username} of age{id}</h1>
            
            <button onClick={()=>(navigate("/ElectronicPage"))}>go to electronic page</button>

        </div>
    )
}

export default Profile


import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { user } = useAuth0();
    

    return (


        <div style={{marginTop: "10rem"}}>
 
    
        <img src={user.picture} alt={user.name} />
        <h2>Welcome {user.name}</h2>
        <p>{user.email}</p> 


        </div>
    )
}

export default Profile

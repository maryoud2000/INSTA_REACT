import { useState } from "react";
import Navbar from "./navbar"
import React from 'react'
import EditableUserProfile from "./EditableUserProfile";

const Profile = ({user ,setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const stored = {username, email, pass};

    function handleEditComplete(result) {
        if (result != null) {
            setUsername(result.username);
            setEmail(result.email);
            setPass(result.pass);
        }        
        setEditMode(false);
    }

    return (
        <div className="profileContainer">
            <Navbar user={user} setUser={setUser} />
            { editMode ? 
                <>
                    <h1>Edit Profile</h1>
                    <EditableUserProfile
                        stored={stored}
                        editCompleteCallback={handleEditComplete}
                    />
                </>
                : <>
                    <h1>My Profile</h1>
                    <div className='userProfile'>
                        <label>User Name: {user} </label>           
                        <label>Email: {stored.email}</label> 
                        <label>Password: {stored.pass}</label> 
                        <button onClick={() => setEditMode(true)}>Edit</button>
                    </div>
                </>
            }            
        </div>
    );
}

export default Profile
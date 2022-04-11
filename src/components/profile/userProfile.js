import React from 'react'
import { useState } from 'react';
import Navbar from '../navbar/navbar';
import { updatePass } from "../../utils";
import { Navigate } from "react-router-dom";
import "./userProfile.css";

const Profile = ({user, setUser}) => {
    const [editMode, setEditMode] = useState(false);
    const [passUpdate, setPass] = useState();

    const submitHandler = (e) =>{
        e.preventDefault();
        updatePass(user, passUpdate)
        setEditMode(false)
    };

    return (
        <div className='profilePage'>
            {!user && <Navigate to="/" />}
            <Navbar user={user} setUser={setUser} />
            <div className="profileContainer">
                <div className='profileImage'>
                    <img src="./images/profileImage.png" alt="profile of the collaborators" ></img>
                </div>
                <div className='profileInfo'>   
                    { editMode ? 
                        <>
                            <form onSubmit={submitHandler}>
                                <input type="password"  placeholder="Enter New Password"  onChange={(e) => setPass(e.target.value)}/> 
                                <button className='btn' type="submit" >Update Password</button>
                            </form>
                        </>
                        : <>
                            <h2>My Profile</h2>
                            <div className='userProfile'>
                                <label className='userDetail'><span id='bold'>User Name:&nbsp;</span>  {user} </label>  
           
                                <label className='userDetail'><span id='bold'>Password:&nbsp;</span>    ****** </label>     
       
                                <button className='btn' onClick={() => setEditMode(true)}>Change Password</button>
                            </div>
                        </>
                    } 
                </div>
            </div>
        </div>
    );
}

export default Profile
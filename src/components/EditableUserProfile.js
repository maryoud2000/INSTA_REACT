import { useState } from 'react';

const EditableUserProfile = ({stored, editCompleteCallback}) => {
    const [username, setUsername] = useState(stored.username);
    const [email, setEmail] = useState(stored.email);
    const [pass, setPass] = useState(stored.pass);

    function handleSaveClicked() {
        editCompleteCallback({username, email, pass});
    }

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    return (
        <div className='editProfile'>   
            <label>User Name:</label>
            <input
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />            
        <label>Email:</label>
            <input
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        <label>Password:</label>
            <input
                type='text'
                value={pass}
                onChange={e => setPass(e.target.value)}
            />                  

            <button onClick={handleSaveClicked}>Save</button>
            <button onClick={handleCancelClicked}>Cancel</button>
            
    </div>
    )
};

export default EditableUserProfile
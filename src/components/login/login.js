import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { createUser, login, tokenLogin } from "../../utils";
import "./login.css";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, [setUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (bool) {
      login(username, pass, setUser);
    } else if (email && email.includes("@")) {
      createUser(username, email, pass, setUser);
    }
  };

  return (
    <>
      {user && <Navigate to="/home" />}
      <div className="loginpage">
        <div className="FormContainer">
          <form onSubmit={submitHandler}>
            <div> <h1>Imiagram</h1> </div>
            <div> <input onChange={(event) => setUsername(event.target.value)} placeholder="Username"/> </div>
            <div>
              {!bool && (<input onChange={(event) => setEmail(event.target.value)} placeholder="Email" type="email"/>)}
            </div>
            <div> <input onChange={(event) => setPass(event.target.value)} placeholder="Password" type="password"/> </div>
            <div className="submitBottom"> <button type="submit">Submit</button> </div>
          </form>
        </div>
        <div className="signupBotton">
            <button onClick={() => setBool(!bool)}> Don't have an account? Sign up </button>
        </div>
      </div>
    </>
  );
};

export default Login
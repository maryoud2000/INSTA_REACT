import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { createUser, login, tokenLogin } from "../utils";
import "./index.css";

export const Login = ({ user, setUser }) => {
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
    // setUser({ username: username, email: email, pass: pass });
    if (bool) {
      login(username, pass, setUser);
    } else if (email && email.includes("@")) {
      createUser(username, email, pass, setUser);
    }
  };

  return (
    <>
      {user && <Navigate to="/home" />}
      <FormContainer onSubmit={submitHandler}>
        <h1>Imiagram</h1>

          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          {!bool && (
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
            />
          )}
          <input
            onChange={(event) => setPass(event.target.value)}
            placeholder="Password"
            type="password"
          />

          <button type="submit">Submit</button>
      </FormContainer>
      <div className="signupBotton">
      <button onClick={() => setBool(!bool)}> Don't have an account? Sign up </button>
      </div>
    </>
    

    
  );
};

const FormContainer = styled.form`
  margin-top: 50px;
  width: 30vw;
  height: 40vh;
  border: gray solid 1px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 20px; 
  font-family: 'M PLUS Code Latin', sans-serif;
`;

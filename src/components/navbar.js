import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";


const Navbar = ({ setUser, createUser }) => {
    const logOut = () => {
      setUser();
      localStorage.removeItem("myToken");
    };

    return (
      <>
      <h1>Imiagram</h1>
      
      <Nbars>
        <Link to="/">Back to login</Link>
        <Link to="/userProfile">My Profile</Link>
        <button onClick={logOut}>LogOut</button>
      </Nbars>
      </>
    );
};

export default Navbar;

const Nbars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-end;
  margin-bottom: 50px;
  margin-right: 20px;
  justify-content: space-around;

`;
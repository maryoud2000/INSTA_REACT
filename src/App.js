import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Profile from "./components/profile/userProfile";

const App = () => {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/userProfile" element={<Profile user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
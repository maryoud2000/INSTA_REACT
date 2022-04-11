import { useState } from "react";
import { Navigate } from "react-router-dom";
import PhotoContainer from "../photocontainer/photoContainer";
import Navbar from "../navbar/navbar";
import "./home.css";

const Home = ({ user, setUser }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <Navbar setUser={setUser} />
      <div className="grabButton"><button onClick={fetchPhotos}>Grab Photos</button> </div>
      <div className="PhotoPage">
        {photos.map((item) => (
          <PhotoContainer photo={item} />
        ))}
      </div>
    </>
  );
};

export default Home
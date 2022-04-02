import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../globalStyles";
import { PhotoContainer } from "./photoContainer";
import Navbar from "./navbar";

export const Home = ({ user, setUser }) => {
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
    <PageContainer>
      {!user && <Navigate to="/" />}
      <Navbar setUser={setUser} />
      <div className="grabBotton"><button onClick={fetchPhotos}>Grab Photos</button> </div>
      <PhotoPage>
        {photos.map((item, index) => (
          <PhotoContainer photo={item} />
        ))}
      </PhotoPage>
    </PageContainer>
  );
};

const PhotoPage = styled.div`
  margin-top: 30px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;
  text-align: center;
`;
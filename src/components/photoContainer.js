import styled from "styled-components";
import "./index.css";

export const PhotoContainer = ({ photo }) => {
  return (
    <div className="photoBox">
      <p>{photo.author}</p>
      <ImgContainer src={photo.download_url} alt="lorem picsum random" />
    </div>
  );
};

const ImgContainer = styled.img`
  width: 100%;
  height: 80%;
`;
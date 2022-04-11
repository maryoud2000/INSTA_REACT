import showImage from "../showimage/showImage";
import "./photoContainer.css";

const PhotoContainer = ({ photo }) => {

  return (
    <div className="photoBox">
        <div className="auther"><p>{photo.author}</p></div>
        <div className="photos"><img id="photoID" src={photo.download_url} alt="lorem picsum random" /></div>
    </div>
  );
};

export default PhotoContainer
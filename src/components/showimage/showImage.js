import { useState } from "react";    

const ShowImage = (props) => {
    const [ fullSize, setFullSize ] = useState()

    const getImage = () => {
     
      // I only want the image clicked on
      setFullSize(props.item);
     
     }          
     

    return(
        <div className="container">
          <img className="api-image" src={props.item} onClick={() => {getImage(props.item)}} ></img>

          <div className="full-size-image">
            <img src = {fullSize}> </img>
          </div>
        </div>
    );
};

export default ShowImage
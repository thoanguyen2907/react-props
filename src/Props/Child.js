import React from "react";

export default function Child(props) {
  let {imageName, sourceImage} = props;
  
  console.log('imageName', imageName);
  console.log('sourceImage', sourceImage);
  return (
    <div>
      <div style={{width: 225}} className="card text-left">
        <img
          className="card-img-top"
          src={sourceImage}
          alt={imageName}
        />
        <div className="card-body">
          <h4 className="card-title">{imageName}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}

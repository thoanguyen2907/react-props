import React from "react";

export default function Child(props) {
  console.log("props", props);
  let { propsName, propSource } = props;
  console.log("propSource", propSource);
  console.log("propsName", propsName);
  return (
    <div>
      <div style={{ width: 225 }} className="card text-left">
        <img
          className="card-img-top"
          src={propSource}
          alt={propSource}
        />
        <div className="card-body">
          <h4 className="card-title">{propsName}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ProductItem() {
  return (
    <div className="card text-left" style={{width: 350}}>
      <img
        className="card-img-top"
        src="http://svcy3.myclass.vn/images/adidas-prophere.png"
        alt="shoes"
      />
      <div className="card-body">
        <h4 className="card-title">Bitis</h4>
        <p className="card-text">300</p>
        <button className="text-white btn-dark">Add to cart</button>
      </div>
    </div>
  );
}

import React from "react";

export default function ProductItem(props) {
 let {productItem} = props;
 console.log('productItem', productItem);
  return (
    <div className="card text-left" style={{width: 350}}>
      <img
        className="card-img-top"
        src={productItem.image}
        alt={productItem.name}
      />
      <div className="card-body">
        <h4 className="card-title">{productItem.name}</h4>
        <p className="card-text">{productItem.price}</p>
        <button className="text-white btn-dark">Add to cart</button>
      </div>
    </div>
  );
}

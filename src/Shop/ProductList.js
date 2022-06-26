import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  console.log (props);
  let {arrayData} = props;
  const renderProductItem = (arrayData) => {
    return arrayData.map((item, index) => {
  return (
    // <div className="row">
      <div className="col-4 mt-3 w3-container w3-center w3-animate-zoom" key={index}>
        <ProductItem  productItem={item}/>
      </div>
    //</div>
  );
  });
};
return <div className="row">{renderProductItem(arrayData)}</div>
}
  

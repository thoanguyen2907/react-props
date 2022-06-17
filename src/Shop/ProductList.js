import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  let {arrayData} = props;

  const renderProductItem = (arrayData) =>{
    return arrayData.map((product,index) =>{
      return(
        <div className="col-4 mt-3 w3-container w3-center w3-animate-zoom" key ={index}>
          <ProductItem productItem = {product}/>
        </div>
      )

    })
  }


  return (
    <div className="row">
      {renderProductItem(arrayData)}
    </div>
  );
}

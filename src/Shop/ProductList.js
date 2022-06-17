import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <div className="row">
      <div className="col-4 mt-3 w3-container w3-center w3-animate-zoom">
        <ProductItem />
      </div>
    </div>
  );
}

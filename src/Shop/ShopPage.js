import React from "react";
import dataJson from "./../Data/data.json";
import ProductList from "./ProductList";
export default function ShopPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div
            className="nav flex-column nav-pills justify-content-center"
            style={{minHeight: 800}}
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
            <a
              class="nav-link"
              id="v-pills-shop-tab"
              data-toggle="pill"
              href="#shop"
              role="tab"
              aria-controls="shop"
              aria-selected="false"
            >
              Shop
            </a>
          </div>
        </div>
        <div className="productList col-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProductList arrProduct={dataJson} />
            </div>
            <div
              className="tab-pane fade"
              id="shop"
              role="tabpanel"
              aria-labelledby="v-pills-shop-tab"
            >
              Shop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

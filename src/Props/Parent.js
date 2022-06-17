import React from "react";
import Child from "./Child";

export default function Parent() {
  let src =
    "https://pro-biker.vn/image/cache/catalog/giay/bitis%20hunter/nu/originals/giay-bitis-hunter-originals-nu-den-trang-2-800x800.jpg";
  let name = "bitis hunter x2";

  return (
    <div>
      <Child propSource={src} name={name} />
    </div>
  );
}

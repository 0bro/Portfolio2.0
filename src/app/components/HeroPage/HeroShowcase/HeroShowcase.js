import React from "react";
import Image from "next/image";

import imageURL from "../../../../../public/Boy Drawing on Tablet.png";

function Showcase() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Image
        style={{ width: "100%", height: "auto" }}
        src={imageURL}
        alt="Boy Drawing On Tablet in 3D space"
      ></Image>
    </div>
  );
}

export default Showcase;

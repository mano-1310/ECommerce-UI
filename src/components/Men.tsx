import React from "react";
import Ck from "./Men/ck";
import Puma from "./Men/puma";
import Zara from "./Men/zara";
import Adidas from "./Men/adidas";
import Pageanimation from "../common/PageAnimation";
const Posts = () => {
  return (
    <div className="min-h-screen px-4">
      <Pageanimation>
        <Adidas />
        <Ck />
        <Puma />
        <Zara />
      </Pageanimation>
    </div>
  );
};

export default Posts;

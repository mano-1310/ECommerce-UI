import React from "react";

import Adidas from "./Women/adidas";
import Ck from "./Women/ck";
import Puma from "./Women/puma";
import Zara from "./Women/zara";
const Women = () => {
  return (
    <div className="min-h-screen px-4">
      <Adidas />
      <Ck />
      <Puma />
      <Zara />
    </div>
  );
};

export default Women;

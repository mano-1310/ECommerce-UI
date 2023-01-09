import React from "react";

const Background = ({ children }: any) => {
  return (
    <div className="bg-gray-200 text-black min-h-full font-poppins transition-all">{children}</div>
  );
};

export default Background;

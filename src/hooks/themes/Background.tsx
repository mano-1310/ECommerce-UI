import React from "react";

const Background = ({ children }: any) => {
  return (
    <div className="bg-gray-200 text-black min-h-full sm:h-auto transition-all">{children}</div>
  );
};

export default Background;

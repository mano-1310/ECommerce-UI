import React from "react";

const Background = ({ children }: any) => {
  return (
    <div className="bg-purple-900 text-white min-h-full transition-all">{children}</div>
  );
};

export default Background;

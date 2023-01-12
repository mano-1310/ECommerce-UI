import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div className="relative">
      <div className="">
        <img
          className="h-[700px]"
          src={images[currentIndex]}
          alt="Slider"
        />
      </div>
      <div className="flex justify-center space-x-3 items-center">
        <button onClick={handlePreviousClick}>Previous</button>
        <button className="text-right" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

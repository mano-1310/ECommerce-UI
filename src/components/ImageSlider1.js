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
    <div className="flex overflow-hidden">
      <div className="flex">
        <img className="h-[700px] rounded-md]" src={images[currentIndex]} alt="Slider" />
      </div>
      <div className=" flex justify-center space-x-3 mt-3 items-center">
        <button onClick={handlePreviousClick} className="p-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </span>
        </button>
        <button className="p-2" onClick={handleNextClick} >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

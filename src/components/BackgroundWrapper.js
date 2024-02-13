import React, { useRef, useState, useEffect } from "react";
import imagesList from "../photos";

export const BackgroundWrapper = ({ children }) => {
  const slidePresentationTime = 4000;
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderInterval = useRef();

  useEffect(() => {
    sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % imagesList.length);
    }, slidePresentationTime);

    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <>
      {[...imagesList].map((image, index) => (
        <img
          id={index}
          key={index}
          className={index === currentSlide ? "image active" : "image"}
          src={image}
          style={{
            zIndex: `-${index + 1}`,
          }}
        />
      ))}
      {children}
    </>
  );
};

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { BiCircle } from "react-icons/bi";

function Slide() {
  const slides = [
    {
      url: "./images/slider1.png",
    },
    {
      url: "./images/slider2.png",
    },
    {
      url: "./images/slider3.png",
    },
    {
      url: "./images/slider4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const autoSlideInterval = 5000; // Auto-slide interval in milliseconds

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextSlide(); // Call nextSlide to move to the next slide
    }, autoSlideInterval);

    return () => {
      clearInterval(autoSlideTimer); // Clear the interval when component unmounts
    };
  }, [currentIndex]); // Run the effect whenever currentIndex changes

  return (
    <div className="relative">
      <div className="main absolute z-20 left-[40%] top-5 mb-2">
        <div className="text-5xl font-bold text-[#fff] text-center font-['Nunito',sans-serif] mb-3">
          Lab n <span className="text-[#EFBA00]">Box</span>
        </div>
        <div className="text-2xl text-[#fff] text-center mb-[30px]">
          Unleash Your{" "}
          <span className="text-[#EFBA00] font-semibold">Inner Explorer!</span>
        </div>
        <a
          href="#"
          className="text-l ml-3  text-[#fff] text-center bg-[#EFBA00] p-4 rounded-[5px] shadow-2xl"
        >
          Join the Lab n Box Community &#8594;
        </a>
      </div>
      <div className="max-w-[100%] h-[250px] w-full m-auto  relative group">
        {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div> */}
        <div
          style={{
            filter: "brightness(40%)",

            backgroundImage: `url(${slides[currentIndex].url}) `,
            height: "250px", // Set height to 100% viewport height
            width: "100%", // Set width to 100% viewport width
          }}
          className="w-full bg-center bg-cover duration-500 opacity-70"
        ></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-[85%] left-[50%] justify-center  absolute text-[#fff]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
              style={{ margin: "0 5px" }}
            >
              {slideIndex === currentIndex ? ( // Check if the slide is active
                <RxDotFilled size={25} /> // Active slide: filled dot
              ) : (
                <BiCircle
                  strokeWidth={2}
                  size={10}
                  style={{ marginTop: "7px" }}
                /> // Inactive slide: circle with border
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;

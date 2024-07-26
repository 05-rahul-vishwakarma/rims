import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Interval between slides in milliseconds
    pauseOnHover: true, // Pause autop
  };
  return (
    <Slider {...settings} className="h-full w-full z-[-1] ">
      <div className="h-full w-full flex items-center justify-center">
        <img src="item1.png" alt="Slide 1" className="h-full w-full object-cover" />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img src="item2.png" alt="Slide 2" className="h-full w-full object-cover" />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img src="item3.png" alt="Slide 3" className="h-full w-full object-cover" />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img src="item4.png" alt="Slide 4" className="h-full w-full object-cover" />
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <img src="item5.png" alt="Slide 5" className="h-full w-full object-cover" />
      </div>
    </Slider>
  );
}
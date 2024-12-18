import React from "react";
import "./index.css"; 
import research1 from "../../../images/research-partner-1.jpg";
import research2 from "../../../images/research-partner-1.jpg";
import research3 from "../../../images/research-partner-1.jpg";
import research4 from "../../../images/research-partner-1.jpg";
import research5 from "../../../images/research-partner-1.jpg";
import research6 from "../../../images/research-partner-1.jpg";
const Swiper = () => {
  const images = [
    research1,
    research2,
    research3,
    research4,
    research5,
    research6
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {images.concat(images).map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`slide-${index}`} height="100" width="250" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;

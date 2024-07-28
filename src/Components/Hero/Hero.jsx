import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          necessitatibus quasi ratione perspiciatis repudiandae repellat sed
          distinctio sunt debitis sapiente?
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

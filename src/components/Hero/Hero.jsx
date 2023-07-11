import React from "react";
import "./hero.css";
import { tags } from "./Tags";

function Hero({ selectedOption, setSelectedOption }) {
  return (
    <div className="md:px-24">
      <div className="option-div shadow">
        {tags.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i == selectedOption && "selected-box"}`}
            onClick={() => {
              setSelectedOption(i);
            }}
          >
            <img src={item.img} className="links-img" />
            <p
              className={`links-label ${
                i == selectedOption && "selected-label"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

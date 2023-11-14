import React from "react";
import SliderItem from "./SliderItem";

const Slider = () => {
  let grid = 5;
  return (
    <div id="slider" className={`grid`}>
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
    </div>
  );
};

export default Slider;

import React from "react";
import SliderItem from "./SliderItem";

const Slider = () => {
  let grid = 5;
  return (
    <div id="slider" className={`grid grid-cols-5 py-6`}>
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
      <SliderItem />
    </div>
  );
};

export default Slider;
